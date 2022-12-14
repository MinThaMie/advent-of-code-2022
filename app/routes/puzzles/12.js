import Route from '@ember/routing/route';

export default class Puzzles12Route extends Route {
  parseInput(file) {
    return file.split('\n').map((row) => row.split(''));
  }

  async model() {
    const resIntro = await fetch('/inputs/day12/intro.txt');
    const introFile = await resIntro.text();
    const res = await fetch('/inputs/day12/full.txt');
    const fullFile = await res.text();
    return {
      example: this.parseInput(introFile),
      full: this.parseInput(fullFile),
    };
  }
}
