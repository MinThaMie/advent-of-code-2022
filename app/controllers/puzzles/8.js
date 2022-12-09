import PuzzlesBaseController from './base';

export default class Puzzles8Controller extends PuzzlesBaseController {
  // BEGIN-SNIPPET day8-solution1
  solve1(input) {
    let visbileTrees = input.length * 4 - 4;
    // start at 1 because the edge is always visible;
    for (let y = 1; y < input.length - 1; y++) {
      for (let x = 1; x < input[y].length - 1; x++) {
        const tree = input[y][x];
        const xMinTrees = [];
        const xMaxTrees = [];
        const yMinTrees = [];
        const yMaxTrees = [];
        for (let treeYmin = y - 1; treeYmin >= 0; treeYmin--) {
          yMinTrees.push(input[treeYmin][x]);
        }
        for (let treeYmax = y + 1; treeYmax <= input.length - 1; treeYmax++) {
          yMaxTrees.push(input[treeYmax][x]);
        }
        for (let treeXmin = x - 1; treeXmin >= 0; treeXmin--) {
          xMinTrees.push(input[y][treeXmin]);
        }
        for (
          let treeXmax = x + 1;
          treeXmax <= input[y].length - 1;
          treeXmax++
        ) {
          xMaxTrees.push(input[y][treeXmax]);
        }
        visbileTrees +=
          xMaxTrees.sort().pop() < tree ||
          xMinTrees.sort().pop() < tree ||
          yMaxTrees.sort().pop() < tree ||
          yMinTrees.sort().pop() < tree;
      }
    }
    return visbileTrees;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET day8-solution2
  solve2(input) {
    let scenicScore = 0;
    for (let y = 1; y < input.length - 1; y++) {
      for (let x = 1; x < input[y].length - 1; x++) {
        const tree = input[y][x];
        const xMinTrees = [];
        const xMaxTrees = [];
        const yMinTrees = [];
        const yMaxTrees = [];
        for (let treeYmin = y - 1; treeYmin >= 0; treeYmin--) {
          yMinTrees.push(input[treeYmin][x]);
        }
        for (let treeYmax = y + 1; treeYmax <= input.length - 1; treeYmax++) {
          yMaxTrees.push(input[treeYmax][x]);
        }
        for (let treeXmin = x - 1; treeXmin >= 0; treeXmin--) {
          xMinTrees.push(input[y][treeXmin]);
        }
        for (
          let treeXmax = x + 1;
          treeXmax <= input[y].length - 1;
          treeXmax++
        ) {
          xMaxTrees.push(input[y][treeXmax]);
        }

        const treeScore =
          this.calculateScore(xMaxTrees, tree) *
          this.calculateScore(xMinTrees, tree) *
          this.calculateScore(yMaxTrees, tree) *
          this.calculateScore(yMinTrees, tree);
        scenicScore = scenicScore < treeScore ? treeScore : scenicScore;
      }
    }
    return scenicScore;
  }

  calculateScore(array, tree) {
    let score = 1;
    let i = 0;
    while (i < array.length - 1) {
      if (array[i] >= tree) {
        return score;
      }
      score++;
      i++;
    }
    return score;
  }
  // END-SNIPPET
}
