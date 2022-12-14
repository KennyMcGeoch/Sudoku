function solveSudoku(board) {
    const n = board.length;
    recurse(board, n);
    return board
  }
  
  function recurse(board, n) {
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if (board[row][col] === '.') {
          const map = {
            '1': true,
            '2': true,
            '3': true,
            '4': true,
            '5': true,
            '6': true,
            '7': true,
            '8': true,
            '9': true,
          };
          for(let i=0; i<9; i++) {
            map[board[i][col]] = false;
            map[board[row][i]] = false;
          }
          const sr = Math.floor(row/3) * 3;
          const sc = Math.floor(col/3) * 3;
          for(let k=sr; k<sr+3; k++) {
            for(let l=sc; l<sc+3; l++) {
              map[board[k][l]] = false;
            }
          }
          const possibles = Object.entries(map).filter(([k, v]) => v).map(([k, v]) => k);
          for(let j=0; j<possibles.length; j++) {
            board[row][col] = possibles[j];
            if (recurse(board, n)) return true;
            else board[row][col] = '.';
          }
          return false;
        }
      }
    }
    return true;
  }

 export default solveSudoku
  