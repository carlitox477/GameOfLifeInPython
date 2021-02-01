from Cell import Cell
import time

class Game:

    def __init__(self, width,lenght):
        """Conway's Game of Life's constructor"""
        self.cellsMap=[]
        self.playing=False
        for i in range(0,lenght):
            l=[]
            for j in range(0,width):
                l.append(Cell(i,j))
                pass
            self.cellsMap.append(l)
            pass
        pass

    def setCellsMap(self, board):
        self.cellsMap=board
        pass

    def setStartLivingCells(self,livingCellsPositions):
        for position in livingCellsPositions:
            self.cellsMap[position[0]][position[1]].setCurrentlyLiving(True)
            pass
        pass

    def executeEvaluationStage(self):
        for cl in self.cellsMap:
            for cell in cl:
                cell.evaluateLive(self.cellsMap)
                pass
            pass
        pass

    def executeChangeStage(self):
        """Shows current game state"""
        for cl in self.cellsMap:
            for cell in cl:
                cell.changeLivingState()
                pass
            pass
        pass

    def executeShowStage(self):
        for cl in self.cellsMap:
            pic=""
            for cell in cl:
                if(cell.getState()):
                    pic+=" O "
                else:
                    pic+=" X "
                pass
            print(pic)
            pass
        print("")
        pass

    def stopGame(self):
        self.playing=False
        pass

    def iterate(self):
        self.executeEvaluationStage()
        self.executeChangeStage()
        pass

    def playGame(self):
        self.playing=True
        i=1
        print("Play start board")
        self.executeShowStage()
        while(self.playing):
            print("Play "+str(i))
            self.executeEvaluationStage()
            self.executeChangeStage()
            self.executeShowStage()
            i+=1
            time.sleep(5)
            pass
        pass
    
    def changeCellState(self, cellsToChangePositions):
        for p in cellsToChangePositions:
            self.cellsMap[p[0]][[1]].invertCurrentState()
            pass
        pass
    
    pass


