import PuzzlesBaseController from './base';

export default class Puzzles9Controller extends PuzzlesBaseController {
  // BEGIN-SNIPPET day9-solution1
  solve1(input) {
    const tailVisited = new Set();
    const tailCoor = [0, 0];
    const headCoor = [0, 0];
    tailVisited.add(`${tailCoor[0]},${tailCoor[1]}`);
    input.forEach(([instruction, amount]) => {
      for (let i = 1; i <= amount; i++) {
        switch (instruction) {
          case 'U':
            headCoor[1] = headCoor[1] + 1;
            if (headCoor[1] - tailCoor[1] > 1) {
              tailCoor[1]++;
              if (headCoor[0] > tailCoor[0]) {
                tailCoor[0]++;
              }
              if (headCoor[0] < tailCoor[0]) {
                tailCoor[0]--;
              }
              tailVisited.add(`${tailCoor[0]},${tailCoor[1]}`);
            }
            break;
          case 'D':
            headCoor[1] = headCoor[1] - 1;
            if (headCoor[1] - tailCoor[1] < -1) {
              tailCoor[1]--;
              if (headCoor[0] > tailCoor[0]) {
                tailCoor[0]++;
              }
              if (headCoor[0] < tailCoor[0]) {
                tailCoor[0]--;
              }
              tailVisited.add(`${tailCoor[0]},${tailCoor[1]}`);
            }
            break;
          case 'L':
            headCoor[0] = headCoor[0] - 1;
            if (headCoor[0] - tailCoor[0] < -1) {
              tailCoor[0]--;
              if (headCoor[1] > tailCoor[1]) {
                tailCoor[1]++;
              }
              if (headCoor[1] < tailCoor[1]) {
                tailCoor[1]--;
              }
              tailVisited.add(`${tailCoor[0]},${tailCoor[1]}`);
            }
            break;
          case 'R':
            headCoor[0] = headCoor[0] + 1;
            if (headCoor[0] - tailCoor[0] > 1) {
              tailCoor[0]++;
              if (headCoor[1] > tailCoor[1]) {
                tailCoor[1]++;
              }
              if (headCoor[1] < tailCoor[1]) {
                tailCoor[1]--;
              }
              tailVisited.add(`${tailCoor[0]},${tailCoor[1]}`);
            }
            break;
        }
      }
    });
    return tailVisited.size;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET day9-solution2
  solve2(input) {
    const tailVisited = new Set();
    const snake = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];
    tailVisited.add(`${snake[9][0]},${snake[9][1]}`);
    input.forEach(([instruction, amount]) => {
      for (let i = 1; i <= amount; i++) {
        switch (instruction) {
          case 'U':
            snake[0][1] = snake[0][1] + 1;
            break;
          case 'D':
            snake[0][1] = snake[0][1] - 1;
            break;
          case 'L':
            snake[0][0] = snake[0][0] - 1;
            break;
          case 'R':
            snake[0][0] = snake[0][0] + 1;
            break;
        }
        // if the head and tail aren't touching and aren't in the same row or column, the tail always moves one step diagonally to keep up
        snake.forEach((value, index) => {
          if (index + 1 < 10) {
            const sameRow = snake[index][1] == snake[index + 1][1];
            const sameColumn = snake[index][0] == snake[index + 1][0];
            if (
              sameRow &&
              Math.abs(snake[index][0] - snake[index + 1][0]) > 1
            ) {
              snake[index + 1][0] =
                snake[index][0] > snake[index + 1][0]
                  ? snake[index + 1][0] + 1
                  : snake[index + 1][0] - 1;
            } else if (
              sameColumn &&
              Math.abs(snake[index][1] - snake[index + 1][1]) > 1
            ) {
              snake[index + 1][1] =
                snake[index][1] > snake[index + 1][1]
                  ? snake[index + 1][1] + 1
                  : snake[index + 1][1] - 1;
            } else if (!sameColumn && !sameRow) {
              if (
                (snake[index][1] - snake[index + 1][1] > 1 &&
                  snake[index][0] < snake[index + 1][0]) ||
                (snake[index][0] - snake[index + 1][0] < -1 &&
                  snake[index][1] > snake[index + 1][1])
              ) {
                snake[index + 1] = [
                  snake[index + 1][0] - 1,
                  snake[index + 1][1] + 1,
                ];
              }
              if (
                (snake[index][1] - snake[index + 1][1] > 1 &&
                  snake[index][0] > snake[index + 1][0]) ||
                (snake[index][0] - snake[index + 1][0] > 1 &&
                  snake[index][1] > snake[index + 1][1])
              ) {
                snake[index + 1] = [
                  snake[index + 1][0] + 1,
                  snake[index + 1][1] + 1,
                ];
              }
              if (
                (snake[index][1] - snake[index + 1][1] < -1 &&
                  snake[index][0] < snake[index + 1][0]) ||
                (snake[index][0] - snake[index + 1][0] < -1 &&
                  snake[index][1] < snake[index + 1][1])
              ) {
                snake[index + 1] = [
                  snake[index + 1][0] - 1,
                  snake[index + 1][1] - 1,
                ];
              }
              if (
                (snake[index][1] - snake[index + 1][1] < -1 &&
                  snake[index][0] > snake[index + 1][0]) ||
                (snake[index][0] - snake[index + 1][0] > 1 &&
                  snake[index][1] < snake[index + 1][1])
              ) {
                snake[index + 1] = [
                  snake[index + 1][0] + 1,
                  snake[index + 1][1] - 1,
                ];
              }
            }
          }
        });
        tailVisited.add(`${snake[9][0]},${snake[9][1]}`);
      }
    });
    return tailVisited.size;
  }
  // END-SNIPPET
}
