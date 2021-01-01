from browser import document, console, alert,html
from browser.template import Template

console.log("This web is implemented using python. This is possible thanks to Brython")
console.log("Brython is a Python to JavaScript compiler, but it does the whole job in the browser and so makes Python appear to be a client scripting language.")
console.log("The bright side, we can use only python if we want :D")
console.log("The con, the performance maybe slower. In fact, almost every time will be slower")
console.log("I would recommend to use brython just in two cases")
console.log("  1° Case: You want to show off your python skills like me :D")
console.log("  2° Case: The web app don't need server information, like this game :D")
console.log("In any other case, I think programming using JS any kind of client side functionality is the best")
console.log("Note: If you've downloaded this web from git, you MUST run a server on the main folder using port 8000")

#Method to create the board
def createBoard(height, width):
    
    #Get the reference to the board
    table=document["board"]

    #Create each row
    for i in range(0,height):
        row=html.TR()
        for j in range(0,width):
            row <= html.TD(str(j), Class= "cell death")
            pass
        table <= row
        pass
    pass

def stop():
    playing=False
    pass

def play():
    #Read the position and create the game
    #Get new position
    #Change the board
    pass

playing=True

#Create the game
#Exectute
#Stop