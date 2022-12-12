import PuzzlesBaseController from './base';

export default class Puzzles12Controller extends PuzzlesBaseController {
  // BEGIN-SNIPPET day12-solution1
  solve1(input) {
    const begin = input
      .map((row, i) => {
        if (row.includes('S')) {
          return `${row.indexOf('S')},${i}`;
        }
      })
      .find((v) => v !== undefined);
    return this.dijkstra(
      input.map((row) => [...row]),
      begin
    );
  }

  dijkstra(input, begin) {
    const distancesMap = new Map();
    const unvisited = new Set();
    const visited = new Set();
    const toVisit = new Set();
    input.forEach((row, y) => {
      row.forEach((cell, x) => {
        distancesMap.set(`${x},${y}`, Infinity);
        unvisited.add(`${x},${y}`);
      });
    });
    distancesMap.set(begin, 0);
    let current = begin;
    const end = input
      .map((row, i) => {
        if (row.includes('E')) {
          return `${row.indexOf('E')},${i}`;
        }
      })
      .find((v) => v !== undefined);
    const [endX, endY] = end.split(',').map((v) => parseInt(v));
    input[endY][endX] = 'z';
    const [beginX, beginY] = begin.split(',').map((v) => parseInt(v));
    input[beginY][beginX] = 'a';
    while (!visited.has(end)) {
      const currentDistance = distancesMap.get(current);
      if (current == undefined) {
        return Infinity;
      }
      const neighbours = this.getNeighbours(current, input);
      neighbours
        .filter(([, coor]) => unvisited.has(coor))
        .forEach(([, coor]) => {
          const dist = distancesMap.get(coor);
          if (dist > currentDistance + 1) {
            toVisit.add(coor);
            distancesMap.set(coor, currentDistance + 1);
          }
        });
      visited.add(current);
      unvisited.delete(current);
      current = this.lowestKey(distancesMap, toVisit);
      toVisit.delete(current);
    }
    return distancesMap.get(end);
  }

  directions = [
    { dx: 0, dy: -1 },
    { dx: -1, dy: 0 },
    { dx: 1, dy: 0 },
    { dx: 0, dy: 1 },
  ];

  lowestKey(distance, unvisited) {
    let lowest = Infinity;
    let lowestK = undefined;
    unvisited.forEach((k) => {
      if (distance.get(k) < lowest) {
        lowest = distance.get(k);
        lowestK = k;
      }
    });
    return lowestK;
  }

  getNeighbours(coor, matrix) {
    const [x, y] = coor.split(',').map((v) => parseInt(v));
    const coorValue = matrix[y][x].charCodeAt(0);
    const neighbours = [];
    for (let i = 0; i < this.directions.length; i++) {
      const neighbour =
        matrix[y + this.directions[i].dy]?.[x + this.directions[i].dx];
      if (neighbour) {
        if (neighbour.charCodeAt(0) - coorValue <= 1) {
          neighbours.push([
            neighbour.charCodeAt(0),
            `${x + this.directions[i].dx},${y + this.directions[i].dy}`,
          ]);
        }
      }
    }
    return neighbours;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET day12-solution2
  solve2(input) {
    const allAs = [];
    input.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell == 'a' || cell == 'S') {
          allAs.push(`${x},${y}`);
        }
      });
    });
    const distance = [];
    allAs.forEach((coor, i) => {
      distance[i] = this.dijkstra(
        input.map((row) => [...row]),
        coor
      );
    });
    return distance.sort((a, b) => a - b)[0];
  }
  // END-SNIPPET
}
