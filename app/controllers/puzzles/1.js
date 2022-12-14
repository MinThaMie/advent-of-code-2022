import PuzzlesBaseController from './base';

export default class Puzzles1Controller extends PuzzlesBaseController {
  // BEGIN-SNIPPET day1-solution1
  solve1(input) {
    let max = 0;
    input.forEach((n) => {
      const caloriesCarried = n.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
      if (max < caloriesCarried) {
        max = caloriesCarried;
      }
    });
    return max;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET day1-solution2
  solve2(input) {
    const winners = [0, 0, 0];
    input.forEach((n) => {
      const caloriesCarried = n.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
      if (winners[0] < caloriesCarried) {
        winners[0] = caloriesCarried;
        winners.sort((a, b) => a - b);
      }
    });
    return winners.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }
  // END-SNIPPET
}
