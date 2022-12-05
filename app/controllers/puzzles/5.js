import PuzzlesBaseController from './base';

export default class Puzzles5Controller extends PuzzlesBaseController {
  // BEGIN-SNIPPET day5-solution1
  solve1(input) {
    const [stacks, instructions] = input;
    const copy = stacks.map((row) => [...row]);
    instructions.forEach((line) => {
      const [amount, from, to] = line;
      for (let i = 1; i <= amount; i++) {
        const toMove = copy[from - 1].pop();
        copy[to - 1].push(toMove);
      }
    });
    let solution = '';
    copy.forEach((stack) => {
      solution += stack[stack.length - 1];
    });
    return solution;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET day5-solution2
  solve2(input) {
    const [stacks, instructions] = input;
    const copy = stacks.map((row) => [...row]);
    instructions.forEach((line) => {
      const [amount, from, to] = line;
      const toMove = copy[from - 1].splice(-amount);
      copy[to - 1].push(...toMove);
    });
    let solution = '';
    copy.forEach((stack) => {
      solution += stack[stack.length - 1];
    });
    return solution;
  }
  // END-SNIPPET
}
