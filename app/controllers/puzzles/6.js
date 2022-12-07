import PuzzlesBaseController from './base';

export default class Puzzles6Controller extends PuzzlesBaseController {
  // BEGIN-SNIPPET day6-solution1
  solve1(input) {
    return this.findMarker(input, 4);
  }

  findMarker(array, amount) {
    let markerFound = false;
    let i = 0;
    while (!markerFound) {
      const packet = array.slice(i, i + amount);
      markerFound = new Set(packet).size == amount;
      i++;
    }
    return i + amount - 1;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET day6-solution2
  solve2(input) {
    return this.findMarker(input, 14);
  }
  // END-SNIPPET
}
