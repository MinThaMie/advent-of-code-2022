import Route from '@ember/routing/route';

export default class Puzzles8Route extends Route {
  parseInput(file) {
    return file.split('\n').map((row) => row.split(''));
  }

  async model() {
    const resIntro = await fetch('/inputs/day8/intro.txt');
    const introFile = await resIntro.text();
    const res = await fetch('/inputs/day8/full.txt');
    const fullFile = await res.text();
    return {
      example: this.parseInput(introFile),
      full: this.parseInput(fullFile),
    };
  }
}
