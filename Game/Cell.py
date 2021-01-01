class Cell:
    def __init__(self, yPosition, xPosition): #Constructor#
        """Conway's Game of Life's cell constructor"""
        self.__xPosition=xPosition
        self.__yPosition=yPosition
        self.__currentlyLiving=False
        self.__nextLivingState=False
        pass


    def evaluateLive(self,cellsMap):
        """Change nextLivingState acording to Conway's Game of Life's rules"""
        livingNeighbours=0
        
        upPosition=self.__yPosition-1
        downPosition=(self.__yPosition+1) % len(cellsMap)
        rightPosition=(self.__xPosition+1) % len(cellsMap[0])
        leftPosition=self.__xPosition-1

        #Take in count margin cells
        if(leftPosition<0):
            leftPosition=len(cellsMap[0])-1
            pass
        
        if(upPosition<0):
            upPosition=len(cellsMap)-1
            pass
        
        livingNeighbours = (
            cellsMap[upPosition][leftPosition].getAdditionLivingEvaluation() + 
            cellsMap[upPosition][self.__xPosition].getAdditionLivingEvaluation() +
            cellsMap[upPosition][rightPosition].getAdditionLivingEvaluation() +
            cellsMap[self.__yPosition][leftPosition].getAdditionLivingEvaluation() + 
            cellsMap[self.__yPosition][rightPosition].getAdditionLivingEvaluation() +
            cellsMap[downPosition][leftPosition].getAdditionLivingEvaluation() + 
            cellsMap[downPosition][self.__xPosition].getAdditionLivingEvaluation() +
            cellsMap[downPosition][rightPosition].getAdditionLivingEvaluation()
            )

        #Define next state acording to Conway's Game of Life's rules
        if((not(self.__currentlyLiving) and livingNeighbours==3) or
        (self.__currentlyLiving and (livingNeighbours==2 or livingNeighbours==3)) ):
            self.__nextLivingState=True
        else:
            self.__nextLivingState=False
            pass
        pass

    def getAdditionLivingEvaluation(self):
        """If the cell is alive, this method gets 1.
        Otherwise, it gets 0"""
        addValue=0
        if(self.__currentlyLiving):
            addValue=1
            pass
        return addValue

    def changeLivingState(self):
        """Change living states depending on what was decided in the evaluation state"""
        self.__currentlyLiving=self.__nextLivingState
        pass

    
    def getState(self):
        return self.__currentlyLiving
    
    def setCurrentlyLiving(self, newState):
        self.__currentlyLiving=newState
        pass

    def invertCurrentState(self):
        self.__currentlyLiving=not(self.__currentlyLiving)
        pass

    pass