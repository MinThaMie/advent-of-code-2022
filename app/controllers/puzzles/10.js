import PuzzlesBaseController from './base';
import { htmlSafe } from '@ember/template';

export default class Puzzles10Controller extends PuzzlesBaseController {
  // BEGIN-SNIPPET day10-solution1
  solve1(input) {
    let x = 1;
    let cycle = 0;
    let toCheck = 20;
    let signalStrengths = 0;
    input.forEach((line) => {
      cycle++;
      if (toCheck == cycle) {
        signalStrengths += cycle * x;
        toCheck += 40;
      }
      if (line !== 'noop') {
        cycle++;
        if (toCheck == cycle) {
          signalStrengths += cycle * x;
          toCheck += 40;
        }
        x += parseInt(line.split(' ')[1]);
      }
    });
    return signalStrengths;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET day10-solution2
  solve2(input) {
    let x = 1;
    let ctrPos = 0;
    const drawn = [];
    input.forEach((line) => {
      if (Math.abs(x - (ctrPos % 40)) == 1 || x == ctrPos % 40) {
        drawn.push('#');
      } else {
        drawn.push(' ');
      }
      ctrPos++;
      if (line !== 'noop') {
        if (Math.abs(x - (ctrPos % 40)) == 1 || x == ctrPos % 40) {
          drawn.push('#');
        } else {
          drawn.push(' ');
        }
        ctrPos++;
        x += parseInt(line.split(' ')[1]);
      }
    });
    const chunkSize = 40;
    let str = '';
    for (let i = 0; i < drawn.length; i += chunkSize) {
      str += drawn.slice(i, i + chunkSize).join('');
      str += '\n';
    }
    return htmlSafe(
      `<div style="white-space:pre-wrap; font-family: monospace;">${str}</div>`
    );
  }
  // END-SNIPPET
}
