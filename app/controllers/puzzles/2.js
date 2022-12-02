import PuzzlesBaseController from './base';

export default class Puzzles1Controller extends PuzzlesBaseController {
  // BEGIN-SNIPPET day2-solution1
  solve1(input) {
    // Rock, Paper, Scissors == A,B,C == X,Y,Z
    // Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock.
    let shapePoints = {
      X: 1,
      Y: 2,
      Z: 3,
    };
    let translate = {
      A: 'X',
      B: 'Y',
      C: 'Z',
    };
    let score = 0;
    input.forEach((round) => {
      let [opp, you] = round.split(' ');
      if (translate[opp] == you) {
        score = score + shapePoints[you] + 3; // Draw is 3
      } else if (you == 'X' && opp == 'C') {
        score = score + shapePoints[you] + 6;
      } else if (you == 'Z' && opp == 'B') {
        score = score + shapePoints[you] + 6;
      } else if (you == 'Y' && opp == 'A') {
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
    let shapePoints = {
      X: 1,
      Y: 2,
      Z: 3,
    };
    let translateOpp = {
      A: 'X',
      B: 'Y',
      C: 'Z',
    };
    let translateResult = {
      X: 'LOSE',
      Y: 'DRAW',
      Z: 'WIN',
    };
    let score = 0;
    input.forEach((round) => {
      let [opp, result] = round.split(' ');
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
