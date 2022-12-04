import PuzzlesBaseController from './base';

export default class Puzzles1Controller extends PuzzlesBaseController {
  // BEGIN-SNIPPET day2-solution1
  solve1(input) {
    const shapePoints = {
      X: 1,
      Y: 2,
      Z: 3,
    };
    const translate = {
      A: 'X',
      B: 'Y',
      C: 'Z',
    };
    let score = 0;
    input.forEach((round) => {
      const [opp, you] = round.split(' ');
      if (translate[opp] == you) {
        score = score + shapePoints[you] + 3; // Draw is 3
      } else if (
        (you == 'X' && opp == 'C') ||
        (you == 'Z' && opp == 'B') ||
        (you == 'Y' && opp == 'A')
      ) {
        score = score + shapePoints[you] + 6;
      } else {
        score += shapePoints[you];
      }
    });
    return score;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET day2-solution2
  solve2(input) {
    const shapePoints = {
      X: 1,
      Y: 2,
      Z: 3,
    };
    const translateOpp = {
      A: 'X',
      B: 'Y',
      C: 'Z',
    };
    const translateResult = {
      X: 'LOSE',
      Y: 'DRAW',
      Z: 'WIN',
    };
    let score = 0;
    input.forEach((round) => {
      const [opp, result] = round.split(' ');
      let you;
      switch (translateResult[result]) {
        case 'LOSE':
          if (opp == 'A') {
            score = score + shapePoints['Z'];
          } else if (opp == 'B') {
            score = score + shapePoints['X'];
          } else if (opp == 'C') {
            score = score + shapePoints['Y'];
          }
          break;
        case 'DRAW':
          you = translateOpp[opp];
          score = score + shapePoints[you] + 3;
          break;
        case 'WIN':
          if (opp == 'C') {
            score = score + shapePoints['X'] + 6;
          } else if (opp == 'B') {
            score = score + shapePoints['Z'] + 6;
          } else if (opp == 'A') {
            score = score + shapePoints['Y'] + 6;
          }
          break;
        default:
          console.log(`Sorry, we went wrong`);
      }
    });
    return score;
  }
  // END-SNIPPET
}
