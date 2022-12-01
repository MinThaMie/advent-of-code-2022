import Route from '@ember/routing/route';

export default class Puzzles1Route extends Route {
  parseInput(file) {
    let elves = file.split('\n\n');
    let calories = elves.map((elf) => elf.split('\n').map((n) => parseInt(n)));
    return calories;
  }

  async model() {
    let resIntro = await fetch('/inputs/day1/intro.txt');
    let introFile = await resIntro.text();
    let res = await fetch('/inputs/day1/full.txt');
    let fullFile = await res.text();
    return {
      example: this.parseInput(introFile),
      full: this.parseInput(fullFile),
    };
  }
}
