class Cell:
    def __init__(self, yPosition, xPosition): #Constructor#
        """Conway's Game of Life's cell constructor"""
        self.xPosition=xPosition
        self.yPosition=yPosition
        self.currentlyLiving=False
        self.nextLivingState=False
        pass


    def evaluateLive(self,cellsMap):
        """Change nextLivingState acording to Conway's Game of Life's rules"""
        livingNeighbours=0
        
        upPosition=self.yPosition-1
        downPosition=(self.yPosition+1) % len(cellsMap)
        rightPosition=(self.xPosition+1) % len(cellsMap[0])
        leftPosition=self.xPosition-1

        #Take in count margin cells
        if(leftPosition<0):
            leftPosition=len(cellsMap[0])-1
            pass
        
        if(upPosition<0):
            upPosition=len(cellsMap)-1
            pass
        
        livingNeighbours = (
            cellsMap[upPosition][leftPosition].getAdditionLivingEvaluation() + 
            cellsMap[upPosition][self.xPosition].getAdditionLivingEvaluation() +
            cellsMap[upPosition][rightPosition].getAdditionLivingEvaluation() +
            cellsMap[self.yPosition][leftPosition].getAdditionLivingEvaluation() + 
            cellsMap[self.yPosition][rightPosition].getAdditionLivingEvaluation() +
            cellsMap[downPosition][leftPosition].getAdditionLivingEvaluation() + 
            cellsMap[downPosition][self.xPosition].getAdditionLivingEvaluation() +
            cellsMap[downPosition][rightPosition].getAdditionLivingEvaluation()
            )

        #Define next state acording to Conway's Game of Life's rules
        if((not(self.currentlyLiving) and livingNeighbours==3) or
        (self.currentlyLiving and (livingNeighbours==2 or livingNeighbours==3)) ):
            self.nextLivingState=True
        else:
            self.nextLivingState=False
            pass
        pass

    def getAdditionLivingEvaluation(self):
        """If the cell is alive, this method gets 1.
        Otherwise, it gets 0"""
        addValue=0
        if(self.currentlyLiving):
            addValue=1
            pass
        return addValue

    def changeLivingState(self):
        """Change living states depending on what was decided in the evaluation state"""
        self.currentlyLiving=self.nextLivingState
        pass

    
    def getState(self):
        return self.currentlyLiving
    
    def setCurrentlyLiving(self, newState):
        self.currentlyLiving=newState
        pass

    def invertCurrentState(self):
        self.currentlyLiving=not(self.currentlyLiving)
        pass

    pass