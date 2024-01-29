import { watch } from "vue";
import { liveState, state } from "./state";
import type { Message, UpdateMessage } from "./types";

const address = "ws://localhost:8080/ws";

export default class SocketManager {
  private socket: WebSocket | null = null;
  private reconnect: boolean = true;

  constructor(isDm: boolean) {
    isDm ?
      watch([
        () => state.value.richPerson,
        () => state.value.location,
        () => state.value.mark,
        () => state.value.protector,
        () => state.value.container,
        () => state.value.chaosClock
      ], () => this.roomUpdate()) :
      watch([
        () => state.value.goblin.name,
        () => state.value.goblin.assSize,
        () => state.value.goblin.assOrigin,
        () => state.value.goblin.class,
        () => state.value.goblin.pocketContents,
        () => state.value.goblin.note,
        () => liveState.value.dice
      ], () => this.playerUpdate());
  }

  connect(): void {
    this.socket = new WebSocket(address);

    this.socket.addEventListener("open", () => {
      console.log("WebSocket connection established");
    });

    this.socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data) as Message;

      switch (message.command) {
        case "update":
          this.handleUpdate(message as UpdateMessage);
          break;
        case "quit":
          this.handleQuit();
          break;
        default:
          console.warn("Received unknown command:", message.command);
          break;
      }
    });

    this.socket.addEventListener("close", () => {
      console.log("WebSocket connection closed");
      this.socket = null;

      liveState.value.party = [];
      liveState.value.roomCode = "";
      liveState.value.dice = [];

      if (this.reconnect) {
        setTimeout(() => this.connect(), 1000);
      }
    });

    this.socket.addEventListener("error", (error) => {
      console.error("WebSocket error:", error);
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
      this.reconnect = false;

      liveState.value.party = [];
      liveState.value.roomCode = "";
    }
  }

  handleUpdate(update: UpdateMessage): void {
    liveState.value.roomCode = update.data.room.code;
    liveState.value.party = update.data.room.clients === null ? [] : update.data.room.clients; //Filter on backend
    state.value.chaosClock = update.data.room.disasterMasterData.chaosClock;
    const code = update.data.room.disasterMasterData.scenario;

    if (code && code.length === 5 && !isNaN(parseInt(code))) {
      state.value.richPerson = parseInt(code[0]);
      state.value.location = parseInt(code[1]);
      state.value.mark = parseInt(code[2]);
      state.value.protector = parseInt(code[3]);
      state.value.container = parseInt(code[4]);
    }
  }

  handleQuit(): void {
    liveState.value.roomCode = "";
    liveState.value.party = [];
    liveState.value.dice = [];
  }

  playerUpdate(): void {
    if (this.socket && liveState.value.roomCode) {
      this.send({
        command: "updateplayer",
        data: {
          code: liveState.value.roomCode,
          player: {
            dice: liveState.value.dice,
            ...state.value.goblin
          }
        }
      });
    }
  }

  roomUpdate(): void {
    if (this.socket && liveState.value.roomCode) {
      this.send({
        command: "updateroom",
        data: {
          code: liveState.value.roomCode,
          scenarioCode: `${state.value.richPerson}${state.value.location}${state.value.mark}${state.value.protector}${state.value.container}`,
          chaosClock: state.value.chaosClock
        }
      })
    }
  }

  joinRoom(roomCode: string): void {
    if (this.socket) {
      this.send({
        command: 'join',
        data: {
          code: roomCode,
          player: {
            dice: liveState.value.dice,
            ...state.value.goblin
          }
        }
      });
    }
  }

  createRoom(scenario: string): void {
    if (this.socket) {
      this.send({
        command: "create",
        data: {
          scenarioCode: scenario
        }
      });
    }
  }

  send(message: any): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    } else {
      console.warn("WebSocket is not open. Message not sent:", message);
    }
  }


}
