import Game.Game as Game
#Game info https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
#Game code

def inputValueCheck():
    inputIsAValidValue=False
    while not(inputIsAValidValue):
        try:
            value=int(input())
            if(value<1):
                print("Please, enter an int value greater than 0: ")
            else:
                inputIsAValidValue=True
            pass
        except ValueError: 
            print("Please, enter an int value greater than 0: ")
            pass

    return value


game=Game.Game(30,20)
aliveCellsPositons=[[5,5],[5,6],[6,6],[7,6],[7,5],[7,4],[6,7],[15,15],[15,16],[15,17],[15,18],[14,15],[14,16],[14,17],[14,18],[14,19],[13,16],[13,17],[13,18]]

game.setStartLivingCells(aliveCellsPositons)

print("Welcome to Conway's Game of Life")

print("--------------------------------")
#print("Please enter the board height: ")
#height=inputValueCheck()

#print("Please enter the board width: ")
#width=inputValueCheck()

game.playGame()

#print("Please choose the cells you want alive with format (X,Y). If there isn't any cell more write start to begin the execution")