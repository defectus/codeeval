var fs = require("fs");

function parseGrid() {
   var grids = [];
   fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
      if (line !== "") {
         var grid       = {direction: '', grid: []},
             t          = line.split(';');
         grid.direction = t[0];
         t[2].trim().split('|').forEach(function (v) {
            var a = [];
            v.trim().split(' ').forEach(function (v) {
               a.push(parseInt(v));
            });
            grid.grid.push(a);
         });
         grids.push(grid);
      }
   });
   return grids;
}

function rotateRight(grid) {
   return grid.map(function (_, c) {
      return grid.map(function (r) {
         return r[c];
      }).reverse();
   });
}

function rotateLeft(grid) {
   return grid.map(function (_, c) {
      return grid.map(function (r) {
         return r[c];
      });
   }).reverse();
}

function processGrid(grid) {
   for (var row = grid.length - 2; row > -1; row--) {
      for (var column = 0; column < grid.length; column++) {
         grid = moveDown(grid, row, column);
      }
   }
   return grid;
}

function moveDown(grid, row, column) {
   console.log(grid);
   if (grid[row + 1][column] === 0 && grid[row][column]) {
      grid[row + 1][column]     = grid[row][column];
      grid[row][column] = 0;
//      shiftColumnDown(grid, row, column);
   } else if (grid[row][column] === grid[row + 1][column]) {
      grid[row][column]     = grid[row + 1][column] * 2;
      grid[row + 1][column] = 0;
      shiftColumnDown(grid, row, column);
   }
   return grid;
}

function shiftColumnDown(grid, startWith, column){
//   console.log(startWith + ':' + column);
   for (var row = startWith; row < grid.length - 1; row++) {
      grid[row + 1][column] = grid[row][column];
   }
}

function processAll () {
   var grids = parseGrid();
   grids.forEach(function (grid) {
      switch (grid.direction) {
      case "LEFT" :
         grid.grid = rotateLeft(grid.grid);
         grid.grid = processGrid(grid.grid);
         grid.grid = rotateRight(grid.grid);
         break;
      case "RIGHT" :
         grid.grid = rotateRight(grid.grid);
         grid.grid = processGrid(grid.grid);
         grid.grid = rotateLeft(grid.grid);
         break;
      case "UP" :
         grid.grid = rotateRight(grid.grid);
         grid.grid = rotateRight(grid.grid);
         grid.grid = processGrid(grid.grid);
         grid.grid = rotateLeft(grid.grid);
         grid.grid = rotateLeft(grid.grid);
         break;
      case "DOWN" :
         grid.grid = processGrid(grid.grid);
         break;
      }
      console.log(grid.grid.map(function(v){return v.join(' ')}).join('|'));
   });
}

processAll();
