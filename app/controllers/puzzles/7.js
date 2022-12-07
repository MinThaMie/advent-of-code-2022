import PuzzlesBaseController from './base';
// BEGIN-SNIPPET day7-class
class Folder {
  constructor(name, parent) {
    this.name = name;
    this.parent = parent;
    this.subFolders = [];
    this.fileSize = 0;
    this.files = [];
    this.path = parent ? parent.path + '/' + name : name;
  }

  getSize() {
    if (this.subFolders.length > 0) {
      let size = this.fileSize;
      this.subFolders.forEach((folder) => {
        size += folder.getSize();
      });
      return size;
    } else {
      return this.fileSize;
    }
  }

  addFileSize(number) {
    this.fileSize += parseInt(number);
  }

  addSubFolders(subFolder) {
    this.subFolders.push(subFolder);
  }

  addFile(file) {
    this.files.push(file);
  }
}
//END-SNIPPET

export default class Puzzles7Controller extends PuzzlesBaseController {
  // BEGIN-SNIPPET day7-solution1
  solve1(input) {
    const fileTree = this.createFileTree(input);
    let sum = 0;
    Object.keys(fileTree).forEach((key) => {
      if (fileTree[key].getSize() <= 100000) {
        sum += fileTree[key].getSize();
      }
    });
    return sum;
  }

  createFileTree(input) {
    const fileTree = {};
    let currentFolder;
    input.forEach((line) => {
      const info = line.split(' ');
      if (info[0] == '$') {
        if (info[1] == 'cd') {
          if (info[2] == '/') {
            if (!Object.keys(fileTree).includes('/')) {
              fileTree['/'] = new Folder('/');
              currentFolder = fileTree['/'];
            } else {
              currentFolder = fileTree['/'];
            }
          } else if (info[2] == '..') {
            currentFolder = currentFolder.parent;
          } else {
            const folder = `${currentFolder.path}/${info[2]}`;
            if (!Object.keys(fileTree).includes(folder)) {
              fileTree[folder] = new Folder(info[2], currentFolder);
              currentFolder = fileTree[folder];
            } else {
              currentFolder = fileTree[folder];
            }
          }
        }
      } else {
        if (info[0] == 'dir') {
          const folder = `${currentFolder.path}/${info[1]}`;
          if (!Object.keys(fileTree).includes(folder)) {
            fileTree[folder] = new Folder(info[1], currentFolder);
            currentFolder.addSubFolders(fileTree[folder]);
          }
        } else {
          currentFolder.addFileSize(info[0]);
          currentFolder.addFile(info[1]);
        }
      }
    });
    return fileTree;
  }
  // END-SNIPPET

  // BEGIN-SNIPPET day7-solution2
  solve2(input) {
    const fileTree = {};
    let currentFolder;
    input.forEach((line) => {
      const info = line.split(' ');
      if (info[0] == '$') {
        if (info[1] == 'cd') {
          if (info[2] == '/') {
            if (!Object.keys(fileTree).includes('/')) {
              fileTree['/'] = new Folder('/');
              currentFolder = fileTree['/'];
            } else {
              currentFolder = fileTree['/'];
            }
          } else if (info[2] == '..') {
            currentFolder = currentFolder.parent;
          } else {
            const folder = `${currentFolder.path}/${info[2]}`;
            if (!Object.keys(fileTree).includes(folder)) {
              fileTree[folder] = new Folder(info[2], currentFolder);
              currentFolder = fileTree[folder];
            } else {
              currentFolder = fileTree[folder];
            }
          }
        }
      } else {
        if (info[0] == 'dir') {
          const folder = `${currentFolder.path}/${info[1]}`;
          if (!Object.keys(fileTree).includes(folder)) {
            fileTree[folder] = new Folder(info[1], currentFolder);
            currentFolder.addSubFolders(fileTree[folder]);
          }
        } else {
          currentFolder.addFileSize(info[0]);
          currentFolder.addFile(info[1]);
        }
      }
    });
    const space = 70000000;
    const unusedSpace = space - fileTree['/'].getSize();
    const freeUp = 30000000 - unusedSpace;
    let removing = space;
    Object.keys(fileTree).forEach((key) => {
      const folderSize = fileTree[key].getSize();
      if (folderSize > freeUp) {
        if (removing > folderSize) {
          removing = folderSize;
        }
      }
    });
    return removing;
  }
  // END-SNIPPET
}
