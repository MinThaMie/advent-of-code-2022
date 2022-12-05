import Route from '@ember/routing/route';

export default class Puzzles1Route extends Route {
  parseInput(file) {
    const elves = file.split('\n\n');
    const calories = elves.map((elf) =>
      elf.split('\n').map((n) => parseInt(n))
    );
    return calories;
  }

  async model() {
    const resIntro = await fetch('/inputs/day1/intro.txt');
    const introFile = await resIntro.text();
    const res = await fetch('/inputs/day1/full.txt');
    const fullFile = await res.text();
    return {
      example: this.parseInput(introFile),
      full: this.parseInput(fullFile),
    };
  }
}
