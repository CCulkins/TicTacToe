// Player, Space, Board, and Game. //

// function Game (player, board, space) {
// this.player = player;
// this.board = board;
// this.space = space
//
// }
//
// var player = {
// name = "";
// mark = [x, o];
// score = 0;
// }


var boardSpace = ['0', '0', '0', 'X', 'X', 'X', '0', '0', '0'];

var winningPlay1 = (boardSpace[0] + boardSpace[1] + boardSpace[2]);
var winningPlay2 = (boardSpace[3] + boardSpace[4] + boardSpace[5]);
var winningPlay3 = (boardSpace[6] + boardSpace[7] + boardSpace[8]);

var winningPlay4 = (boardSpace[0] + boardSpace[3] + boardSpace[6]);
var winningPlay5 = (boardSpace[1] + boardSpace[4] + boardSpace[7]);
var winningPlay6 = (boardSpace[2] + boardSpace[5] + boardSpace[8]);

var winningPlay7 = (boardSpace[2] + boardSpace[4] + boardSpace[6]);
var winningPlay8 = (boardSpace[0] + boardSpace[4] + boardSpace[8]);


var winningPlayArray = [winningPlay1, winningPlay2, winningPlay3, winningPlay4, winningPlay5, winningPlay6, winningPlay7, winningPlay8];

for (var index = 0; index < winningPlayArray.length; index += 1) {
  var print = winningPlayArray[index].valueOf();
	console.log(print);
  if (print === "XXX") {
    console.log("winner");
    } else {
    console.log("loser!");
  }
}

// if (winningPlay1 || winningPlay2 || winningPlay3 ||
// winningPlay4 || winningPlay5 || winningPlay6 ||
// winningPlay7 || winningPlay8) === 'XXX') {
//
// console.log("playerOneWins");
// } if else {
// console.log("nope");
// }


//
// var space = {
// space1 = [];
// space2 = [];
// space3 = [];
// space4 = [];
// space5 = [];
// space6 = [];
// space7 = [];
// space8 = [];
// space9 = [];
// }
