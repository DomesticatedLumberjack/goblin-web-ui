import red1 from '@/assets/images/dice/dieRed1.png';
import red2 from '@/assets/images/dice/dieRed2.png';
import red3 from '@/assets/images/dice/dieRed3.png';
import red4 from '@/assets/images/dice/dieRed4.png';
import red5 from '@/assets/images/dice/dieRed5.png';
import red6 from '@/assets/images/dice/dieRed6.png';
import white1 from '@/assets/images/dice/dieWhite1.png';
import white2 from '@/assets/images/dice/dieWhite2.png';
import white3 from '@/assets/images/dice/dieWhite3.png';
import white4 from '@/assets/images/dice/dieWhite4.png';
import white5 from '@/assets/images/dice/dieWhite5.png';
import white6 from '@/assets/images/dice/diewhite6.png';

export const redDice = [
  red1,
  red2,
  red3,
  red4,
  red5,
  red6
];

export const whiteDice = [
  white1,
  white2,
  white3,
  white4,
  white5,
  white6
];

export function getDie(num: number, color: 'red' | 'white') {
  return (color === 'red' ? redDice : whiteDice)[num - 1];
}