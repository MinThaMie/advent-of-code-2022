import PuzzlesBaseController from './base';

export default class Puzzles3Controller extends PuzzlesBaseController {
  // BEGIN-SNIPPET day3-solution1
  solve1(input) {
    let found = [];
    let sum = 0;
    input.forEach((line) => {
      let first = line.slice(0, line.length / 2).split('');
      let last = line.slice(-line.length / 2).split('');
      let duplicate = first.find((l) => last.includes(l));
      found.push(duplicate);
    });
    found.forEach((char) => {
      if (char == char.toUpperCase()) {
        sum += char.charCodeAt(0) - 38;
      } else {
        sum += char.charCodeAt(0) - 96;
      }
    });
    return sum;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET day3-solution2
  solve2(input) {
    let badges = [];
    let sum = 0;
    const chunkSize = 3;
    for (let i = 0; i < input.length; i += chunkSize) {
      const group = input.slice(i, i + chunkSize);
      let duplicates = group[0]
        .split('')
        .filter((l) => group[1].split('').includes(l));
      let badge = duplicates.find((l) => group[2].split('').includes(l));
      badges.push(badge);
    }
    badges.forEach((char) => {
      if (char == char.toUpperCase()) {
        sum += char.charCodeAt(0) - 38;
      } else {
        sum += char.charCodeAt(0) - 96;
      }
    });
    return sum;
  }
  // END-SNIPPET
}
