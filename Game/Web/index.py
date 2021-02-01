from browser import document, console, alert,html,timer
from browser.template import Template
from Game import Game
from Cell import Cell
import time

console.log("This web is implemented using python. This is possible thanks to Brython")
console.log("Brython is a Python to JavaScript compiler, but it does the whole job in the browser and so makes Python appear to be a client scripting language.")
console.log("The bright side, we can use only python if we want :D")
console.log("The con, the performance maybe slower. In fact, almost every time will be slower")
console.log("I would recommend to use brython just in two cases")
console.log("  1° Case: You want to show off your python skills like me :D")
console.log("  2° Case: The web app don't need server information, like this game :D")
console.log("In any other case, I think programming using JS any kind of client side functionality is the best")
console.log("Note: If you've downloaded this web from git, you MUST run a server on the main folder using port 8000")

playing=False
game=[]
idtimer=1

def start(click):
    global playing, game
    game=createGame(click)

    playing=True

    document['start-btn'].unbind('click',start)
    document['start-btn'].id="stop-btn"
    document['stop-btn'].bind('click',stop)
    document['stop-btn'].text="STOP"
    play()
    pass

def stop(click):
    global playing,idtimer
    timer.clear_timeout(idtimer)

    document['stop-btn'].unbind('click',stop)
    document['stop-btn'].id="start-btn"
    document['start-btn'].bind('click',start)
    document['start-btn'].text="START"

    console.log("Stop game of life execution")
    playing=False
    pass

def play():
    global playing, game,idtimer
    #Read the position and create the game
    if(playing):
        #Execute iteration
        game.iterate()
        #Change board
        changeBoard(game)
        idtimer=timer.set_timeout(play,200)
        pass
    pass

def createGame(click):
    #Read the position and create the game
    board=document.getElementById('board')

    gameBoard=[]
    i=0
    for row in board:
        j=0
        r=list()
        gameBoard.append(r)
        for cell in row:
            classes=cell.class_name.split()
            cellObject=Cell(i-1,j)
            r.append(cellObject)
            if("live" in classes):
                cellObject.setCurrentlyLiving(True)
            j=j+1
            pass
        i=i+1
        pass
    gameBoard.remove([])
    game=Game(len(gameBoard),len(gameBoard[0]))
    game.setCellsMap(gameBoard)
    return game

def changeBoard(game):
    rowID=0
    for r in game.cellsMap:
        colID=0
        for c in r:
            cell=document[c.getCellId()]
            cellClasses=cell.class_name.split()
            if(c.getState() and not("live" in cellClasses)):
                changeCellClass(cell)
            elif(not(c.getState()) and not("death" in cellClasses)):
                changeCellClass(cell)
            colID=colID+1
            pass
        rowID=rowID+1
        pass

    pass


def mouseCellEvent(cell, colorOver):
    cell.style.backgroundColor=colorOver
    pass


def changeCellClass(cell):
    if (cell.class_name=="cell live"):
        cell.class_name="cell death"
        #cell.style.backgroundColor="darkcyan"
    elif (cell.class_name=="cell death"):
        cell.class_name="cell live"
        #cell.style.backgroundColor="yellowgreen"
    pass

document['start-btn'].bind('click',start)

#Create the game
#Exectute
#Stop