import Route from '@ember/routing/route';

export default class Puzzles5Route extends Route {
  parseInput(file) {
    let [stacks, instructions] = file.split('\n\n');
    instructions = instructions
      .split('\n')
      .map((s) => s.split(' ').map((n) => parseInt(n)));
    stacks = stacks.split('\n').map((s) => {
      return s.split(' ');
    });

    return [stacks, instructions];
  }

  async model() {
    const resIntro = await fetch('/inputs/day5/intro.txt');
    const introFile = await resIntro.text();
    const res = await fetch('/inputs/day5/full.txt');
    const fullFile = await res.text();
    return {
      example: this.parseInput(introFile),
      full: this.parseInput(fullFile),
    };
  }
}
