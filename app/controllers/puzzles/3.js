import PuzzlesBaseController from './base';

export default class Puzzles3Controller extends PuzzlesBaseController {
  // BEGIN-SNIPPET day3-solution1
  solve1(input) {
    let sum = 0;
    input.forEach((line) => {
      const first = line.slice(0, line.length / 2).split('');
      const last = line.slice(-line.length / 2).split('');
      const duplicate = first.find((l) => last.includes(l));
      if (duplicate == duplicate.toUpperCase()) {
        sum += duplicate.charCodeAt(0) - 38;
      } else {
        sum += duplicate.charCodeAt(0) - 96;
      }
    });
    return sum;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET day3-solution2
  solve2(input) {
    let sum = 0;
    const chunkSize = 3;
    for (let i = 0; i < input.length; i += chunkSize) {
      const group = input.slice(i, i + chunkSize);
      const duplicates = group[0]
        .split('')
        .filter((l) => group[1].split('').includes(l));
      const badge = duplicates.find((l) => group[2].split('').includes(l));
      if (badge == badge.toUpperCase()) {
        sum += badge.charCodeAt(0) - 38;
      } else {
        sum += badge.charCodeAt(0) - 96;
      }
    }
    return sum;
  }
  // END-SNIPPET
}
