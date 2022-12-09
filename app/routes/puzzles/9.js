import Route from '@ember/routing/route';

export default class Puzzles9Route extends Route {
  parseInput(file) {
    return file.split('\n').map((line) => line.split(' '));
  }

  async model() {
    const resIntro = await fetch('/inputs/day9/intro.txt');
    const introFile = await resIntro.text();
    const res = await fetch('/inputs/day9/full.txt');
    const fullFile = await res.text();
    return {
      example: this.parseInput(introFile),
      full: this.parseInput(fullFile),
    };
  }
}
