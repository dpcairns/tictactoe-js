
function Player(XorO)
{
	this.identity = XorO;
	this.mark = function(row,col)
	{
		if(board.spaces[row][col] != "x" && board.spaces[row][col] != "o")
		{
			board.spaces[row][col] = XorO
			if(game.checkWin())
			{
				$("#winner").text(XorO + " wins!");
				$(".turn").hide();
				$(".winner").show();
				$(".winner").click(function()
				{
				$(".winner").hide();

				game.newGame();
				});		
			};
		game.nextTurn();
		}
	};
}

function Space(row,col)
{
	this.xCoordinate = parseInt(row); //used in boad.init()
	this.yCoordinate = parseInt(col); //used in board.init()
	this.playerMark = row+"" + "," + col+""
}

function Board()
{
	this.spaces = [[],[],[]]
	this.init = function()
	{
		for(i=0;i<3;i++)
		{
			for(j=0;j<3;j++)
			{
			thisSpace = new Space(i,j);
			this.spaces[i][j] = thisSpace.playerMark
			}
		}
	}
	this.find = function(row,col)
	{
		return this.spaces[row][col]
	};
};

function Game() 
{
	this.turnChecker = "xTurn";
	this.init = function()
	{
	playerX = new Player("x");
	playerO = new Player("o");
	board = new Board();
	board.init()
	return;
	}
	this.nextTurn = function()
	{
		if (this.turnChecker === "xTurn")
		{
			this.turnChecker = "oTurn";
			$("#turn").text("o")

		}
		else if (this.turnChecker === "oTurn")
		{
			this.turnChecker = "xTurn";
			$("#turn").text("x")

		};

	};
	this.checkWin = function(){
					/*win conditions:
			 123, 147, 789, 369, 258, 456, 159, 753
			 8 conditions
			 */
			s1 = board.spaces[0][0]
			s2 = board.spaces[0][1]
			s3 = board.spaces[0][2]
			s4 = board.spaces[1][0]
			s5 = board.spaces[1][1]
			s6 = board.spaces[1][2]
			s7 = board.spaces[2][0]
			s8 = board.spaces[2][1]
			s9 = board.spaces[2][2]
			if (s1 === s2 && s1 === s3){
				return true;
			}
			else if (s1 === s4 && s1 === s7){
				return true;
			}

			else if (s7 === s8 && s7 === s9){
				return true;
			}

			else if (s3 === s6 && s3 === s9){
				return true;
			}

			else if (s2 === s5 && s2 === s8){
				return true;
			}

			else if (s4 === s5 && s4 === s6){
				return true;
			}

			else if (s1 === s5 && s1 === s9){
				return true;
			}

			else if (s7 === s5 && s7 === s3){
				return true;
			}
			else{
				return false;
			}
	};
	this.newGame = function(){
		$(".turn").show()
		$("#box1").text("1")
		$("#box2").text("2")
		$("#box3").text("3")
		$("#box4").text("4")
		$("#box5").text("5")
		$("#box6").text("6")
		$("#box7").text("7")
		$("#box8").text("8")
		$("#box9").text("9")
		game.init();
	}
}

$(document).ready(function(){

game = new Game();
game.init();
$("#turn").text("x")

	$("#box1").click(function()
	{if ($(this).text() != "x" && $(this).text() != "o") {
		
		if (game.turnChecker === "xTurn")
		{
			$(this).text(playerX.identity) 
			playerX.mark(0,0)
		}
		else if (game.turnChecker === "oTurn")
		{
			$(this).text(playerO.identity)
			playerO.mark(0,0)

		;
		}
	}
	});
	
	$("#box2").click(function()
	{if ($(this).text() != "x" && $(this).text() != "o") {
		

		if (game.turnChecker === "xTurn")
		{
			$(this).text(playerX.identity)
			playerX.mark(0,1)
 
		}
		else if (game.turnChecker === "oTurn")
		{
			$(this).text(playerO.identity)
			playerO.mark(0,1)
		}
	}
	});
	
	$("#box3").click(function()
	{if ($(this).text() != "x" && $(this).text() != "o") {
		
		if (game.turnChecker === "xTurn")
		{
			$(this).text(playerX.identity) 
			playerX.mark(0,2)

		}
		else if (game.turnChecker === "oTurn")
		{
			$(this).text(playerO.identity)
			playerO.mark(0,2)

		;
		}
	}
	});
	
	$("#box4").click(function()
	{if ($(this).text() != "x" && $(this).text() != "o") {
		
		if (game.turnChecker === "xTurn")
		{
			$(this).text(playerX.identity)
			playerX.mark(1,0)
 

		}
		else if (game.turnChecker === "oTurn")
		{
			$(this).text(playerO.identity)
			playerO.mark(1,0)

		;
		}
	}
	});
	
	$("#box5").click(function()
	{
		
		if ($(this).text() != "x" && $(this).text() != "o") {
		if (game.turnChecker === "xTurn")
		{
			$(this).text(playerX.identity)
			playerX.mark(1,1)
 
		}
		else if (game.turnChecker === "oTurn")
		{
			$(this).text(playerO.identity)
			playerO.mark(1,1)

		;
		}
	}
	});
	
	$("#box6").click(function()
	{if ($(this).text() != "x" && $(this).text() != "o") {
		
		if (game.turnChecker === "xTurn")
		{
			$(this).text(playerX.identity) 
			playerX.mark(1,2)

		}
		else if (game.turnChecker === "oTurn")
		{
			$(this).text(playerO.identity)
			playerO.mark(1,2)

		;
		}
	}
	});
	
	$("#box7").click(function()
	{if ($(this).text() != "x" && $(this).text() != "o") {
		
		if (game.turnChecker === "xTurn")
		{
			$(this).text(playerX.identity) 
			playerX.mark(2,0)

		}
		else if (game.turnChecker === "oTurn")
		{
			$(this).text(playerO.identity)
			playerO.mark(2,0)

		;
		}
	}
	});
	
	$("#box8").click(function()
	{if ($(this).text() != "x" && $(this).text() != "o") {
		
		if (game.turnChecker === "xTurn")
		{
			$(this).text(playerX.identity)
			playerX.mark(2,1)
 
		}
		else if (game.turnChecker === "oTurn")
		{
			$(this).text(playerO.identity)
			playerO.mark(2,1)
		}
	}
	});
	
	$("#box9").click(function()
	{if ($(this).text() != "x" && $(this).text() != "o") {
		
		if (game.turnChecker === "xTurn")
		{
			$(this).text(playerX.identity) 
			playerX.mark(2,2)

		}
		else if (game.turnChecker === "oTurn")
		{
			$(this).text(playerO.identity)
			playerO.mark(2,2)

		;
		}
	}
	});
	

});
	//know's whose turn it is
	//knows if the game is over
