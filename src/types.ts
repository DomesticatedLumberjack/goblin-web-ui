export interface Message {
  command: string;
  data: any;
}

export interface UpdateMessage {
  command: 'update';
  data: {
    clientId: number;
    room: Room;
  };
}

export interface Die {
  value: number;
  active: boolean;
}

export interface Goblin {
  name: string,
  assSize: number,
  assOrigin: number,
  class: number,
  pocketContents: string,
  note: string
  dice: number[]
}
export interface Client {
  id: number,
  playerData: Goblin
}

export interface Room {
  clients: Client[],
  code: string,
  disasterMasterData: {
    chaosClock: number,
    scenario: string,
  },
  hostId: number
}