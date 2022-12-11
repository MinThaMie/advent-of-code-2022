import PuzzlesBaseController from './base';
// BEGIN-SNIPPET day11-class
class Monkey {
  constructor(_, startingItems, operation, test, trueThrow, falseThrow) {
    this.items = startingItems
      .split(': ')[1]
      .split(',')
      .map((n) => parseInt(n));
    this.operation = operation.split('= ')[1];
    this.testNumber = parseInt(test.split('by ')[1]);
    this.trueThrow = parseInt(trueThrow.split('monkey ')[1]);
    this.falseThrow = parseInt(falseThrow.split('monkey ')[1]);
    this.inspectedItems = 0;
  }

  inspectItem(item) {
    this.inspectedItems++;
    const old = item;
    return eval(this.operation);
  }

  testItem(item) {
    return item % this.testNumber == 0 ? this.trueThrow : this.falseThrow;
  }
}
// END-SNIPPET

export default class Puzzles11Controller extends PuzzlesBaseController {
  // BEGIN-SNIPPET day11-solution1
  solve1(input) {
    const monkeys = input.map((monkey) => new Monkey(...monkey));
    for (let rounds = 0; rounds < 20; rounds++) {
      for (let i = 0; i < monkeys.length; i++) {
        const monkey = monkeys[i];
        while (monkey.items.length > 0) {
          const item = monkey.items.shift();
          const newValue = Math.floor(monkey.inspectItem(item) / 3);
          const throwTo = monkey.testItem(newValue);
          monkeys[throwTo].items.push(newValue);
        }
      }
    }
    const mostActive = monkeys
      .map((m) => m.inspectedItems)
      .sort((a, b) => b - a);
    return mostActive[0] * mostActive[1];
  }
  // END-SNIPPET

  // BEGIN-SNIPPET day11-solution2
  solve2(input) {
    const monkeys = input.map((monkey) => new Monkey(...monkey));
    const modulo = monkeys.map((m) => m.testNumber).reduce((m, n) => m * n);
    for (let rounds = 0; rounds < 10000; rounds++) {
      for (let i = 0; i < monkeys.length; i++) {
        const monkey = monkeys[i];
        while (monkey.items.length > 0) {
          const item = monkey.items.shift() % modulo;
          const newValue = monkey.inspectItem(item);
          const throwTo = monkey.testItem(newValue);
          monkeys[throwTo].items.push(newValue);
        }
      }
    }
    const mostActive = monkeys
      .map((m) => m.inspectedItems)
      .sort((a, b) => b - a);
    return mostActive[0] * mostActive[1];
  }
  // END-SNIPPET
}
