import PuzzlesBaseController from './base';

export default class Puzzles4Controller extends PuzzlesBaseController {
  // BEGIN-SNIPPET day4-solution1
  solve1(input) {
    let amount = 0;
    input.forEach((line) => {
      let [first, second] = line.split(',');
      let [firstMin, firstMax] = first.split('-').map((n) => parseInt(n));
      let [secondMin, secondMax] = second.split('-').map((n) => parseInt(n));
      if (
        (firstMin >= secondMin && firstMax <= secondMax) ||
        (secondMin >= firstMin && secondMax <= firstMax)
      ) {
        amount++;
      }
    });
    return amount;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET day4-solution2
  solve2(input) {
    let amount = 0;
    input.forEach((line) => {
      let [first, second] = line.split(',');
      let [firstMin, firstMax] = first.split('-').map((n) => parseInt(n));
      let [secondMin, secondMax] = second.split('-').map((n) => parseInt(n));
      if (firstMax >= secondMin && firstMin <= secondMax) {
        amount++;
      }
    });
    return amount;
  }
  // END-SNIPPET
}
