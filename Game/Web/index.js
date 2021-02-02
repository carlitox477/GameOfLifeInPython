function createBoard(heigh, width){
    console.log("Executing function");
    var table,row,options,cell;

    table=document.getElementById("board");
    //table=document.getElementById("gameboard");
    table.style.gridTemplateRows= "repeat("+heigh+", 1fr)";
    table.style.gridTemplateColumns="repeat("+width+",1fr)";
    table.style.height=table.style.width

    for (var i=0; i<heigh;i++){
        
        row=document.createElement("tr");
        
        for (var j=0;j<width;j++){
            cell=document.createElement("td")
           
            cell.id= "cell-"+i+"-"+j;
            cell.classList.add("cell","death")

            cell.onclick=function(){changeCellClass(this)};
            cell.onmouseover=function(){mouseOverEvent(this)};
            cell.onmouseleave=function(){mouseLeaveEvent(this)};
            row.appendChild(cell);
        }
        table.appendChild(row)
    }
}

function windowReszie(){
    var size =$("td").width();
    $("td").height(size);
  }

function mouseOverEvent(cell){
    if(cell.classList.contains("live")){
        cell.style.backgroundColor="darkcyan"
    }else{
        cell.style.backgroundColor="yellowgreen";
    }
}

function mouseLeaveEvent(cell){
    if(cell.classList.contains("live")){
        cell.style.backgroundColor="yellowgreen";
    }else{
        cell.style.backgroundColor="darkcyan";
    }
}

function changeCellClass(cell){
    if(cell.classList.contains("death")){
        cell.classList.remove("death")
        cell.classList.add("live")
        //cell.style.backgroundColor="yellowgreen";
    }else{
        cell.classList.remove("live")
        cell.classList.add("death")
        //cell.style.backgroundColor="darkcyan";      
    }
}

function clearBoard(heigh,width){
    for(var i=0; i<heigh;i++){
        for(var j=0;j<width;j++){
            cell=document.getElementById("cell-"+i+"-"+j);
            if(cell.classList.contains("live")){
                changeCellClass(cell,"live");
            }
        }
    }
}

function createBlockPattern(heigh,width){
    var posX, posY;

    clearBoard(heigh,width)
    posY=heigh/2
    posX=width/2;
    cell=document.getElementById("cell-"+posY+"-"+posX);
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+posX);
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+posY+"-"+(posX+1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX+1));
    changeCellClass(cell,"death")
}

function createBeeHivePattern(heigh,width){
    var posX, posY;

    clearBoard(heigh,width)
    posY=heigh/2
    posX=width/2;
    cell=document.getElementById("cell-"+(posY-1)+"-"+posX);
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-1)+"-"+(posX+1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY)+"-"+(posX-1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY)+"-"+(posX+2));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+posX);
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX+1));
    changeCellClass(cell,"death")
}

function createLoafPattern(heigh,width){
    var posX, posY;

    clearBoard(heigh,width)
    posY=heigh/2
    posX=width/2;
    cell=document.getElementById("cell-"+(posY-1)+"-"+posX);
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-1)+"-"+(posX+1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY)+"-"+(posX-1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY)+"-"+(posX+2));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX+2));
    changeCellClass(cell,"death")
    
    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX+1));
    changeCellClass(cell,"death")
}

function createBoatPattern(heigh,width){
    var posX, posY;

    clearBoard(heigh,width)
    posY=heigh/2
    posX=width/2;

    cell=document.getElementById("cell-"+(posY-1)+"-"+(posX-1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-1)+"-"+posX);
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY)+"-"+(posX-1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY)+"-"+(posX+1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX));
    changeCellClass(cell,"death")
}

function createTubPattern(heigh,width){
    var posX, posY;

    clearBoard(heigh,width)
    posY=heigh/2
    posX=width/2;

    cell=document.getElementById("cell-"+(posY-1)+"-"+posX);
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY)+"-"+(posX-1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY)+"-"+(posX+1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX));
    changeCellClass(cell,"death")
}

function createBlinkerPattern(heigh,width){
    var posX, posY;

    clearBoard(heigh,width)
    posY=heigh/2
    posX=width/2;

    cell=document.getElementById("cell-"+(posY-1)+"-"+posX);
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY)+"-"+posX);
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+posX);
    changeCellClass(cell,"death")
}

function createToadPattern(heigh,width){
    var posX, posY;

    clearBoard(heigh,width)
    posY=heigh/2
    posX=width/2;

    cell=document.getElementById("cell-"+(posY-1)+"-"+posX);
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-1)+"-"+(posX+1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-1)+"-"+(posX+2));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY)+"-"+(posX-1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY)+"-"+(posX));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY)+"-"+(posX+1));
    changeCellClass(cell,"death")
}

function createBeaconPattern(heigh,width){
    var posX, posY;

    clearBoard(heigh,width)
    posY=heigh/2
    posX=width/2;

    cell=document.getElementById("cell-"+(posY-2)+"-"+(posX-2));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-2)+"-"+(posX-1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-1)+"-"+(posX-2));
    changeCellClass(cell,"death")
    
    cell=document.getElementById("cell-"+(posY-1)+"-"+(posX-1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY)+"-"+(posX));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY)+"-"+(posX+1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX+1));
    changeCellClass(cell,"death")
}

function createPulsarPattern(heigh,width){
    var posX, posY;

    clearBoard(heigh,width)
    posY=heigh/2
    posX=width/2;

    cell=document.getElementById("cell-"+(posY-7)+"-"+(posX-4));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-7)+"-"+(posX-3));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-7)+"-"+(posX-2));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-7)+"-"+(posX+2));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-7)+"-"+(posX+3));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-7)+"-"+(posX+4));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-5)+"-"+(posX-6));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-4)+"-"+(posX-6));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-3)+"-"+(posX-6));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-5)+"-"+(posX-1));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-4)+"-"+(posX-1));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-3)+"-"+(posX-1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-5)+"-"+(posX+1));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-4)+"-"+(posX+1));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-3)+"-"+(posX+1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-5)+"-"+(posX+6));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-4)+"-"+(posX+6));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-3)+"-"+(posX+6));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-2)+"-"+(posX-4));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-2)+"-"+(posX-3));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-2)+"-"+(posX-2));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-2)+"-"+(posX+2));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-2)+"-"+(posX+3));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-2)+"-"+(posX+4));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY)+"-"+(posX-4));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY)+"-"+(posX-3));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY)+"-"+(posX-2));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY)+"-"+(posX+2));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY)+"-"+(posX+3));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY)+"-"+(posX+4));
    changeCellClass(cell,"death")

    //
    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX-6));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX-6));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+3)+"-"+(posX-6));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX-1));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX-1));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+3)+"-"+(posX-1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX+1));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX+1));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+3)+"-"+(posX+1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX+6));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX+6));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+3)+"-"+(posX+6));
    changeCellClass(cell,"death")

    //
    cell=document.getElementById("cell-"+(posY+5)+"-"+(posX-4));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+5)+"-"+(posX-3));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+5)+"-"+(posX-2));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+5)+"-"+(posX+2));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+5)+"-"+(posX+3));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+5)+"-"+(posX+4));
    changeCellClass(cell,"death")
}

function createPentaDeclathonPattern(heigh,width){
    var posX, posY;

    clearBoard(heigh,width)
    posY=heigh/2
    posX=width/2;


    cell=document.getElementById("cell-"+(posY-5)+"-"+(posX));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-4)+"-"+(posX));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-3)+"-"+(posX-1));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-3)+"-"+(posX+1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-2)+"-"+(posX));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-1)+"-"+(posX));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY)+"-"+(posX));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX-1));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX+1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+3)+"-"+(posX));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+4)+"-"+(posX));
    changeCellClass(cell,"death")




}

function createGliderPattern(heigh,width){
    var posX, posY;

    clearBoard(heigh,width)
    posY=heigh/2
    posX=width/2;

    cell=document.getElementById("cell-"+(posY-1)+"-"+(posX));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY)+"-"+(posX+1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX-1));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX+1));
    changeCellClass(cell,"death")
}

function createLightSpaceShipPattern(heigh,width){
    var posX, posY;

    clearBoard(heigh,width)
    posY=heigh/2
    posX=width/2;

    cell=document.getElementById("cell-"+(posY-2)+"-"+(posX-1));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-2)+"-"+(posX+2));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-1)+"-"+(posX-2));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY)+"-"+(posX-2));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY)+"-"+(posX+2));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX-2));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX-1));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX+1));
    changeCellClass(cell,"death")

}


function createMiddleSpaceShipPattern(heigh,width){
    var posX, posY;

    clearBoard(heigh,width)
    posY=heigh/2
    posX=width/2;

    cell=document.getElementById("cell-"+(posY-2)+"-"+(posX));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-1)+"-"+(posX-2));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-1)+"-"+(posX+2));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY)+"-"+(posX-3));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX-3));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX+2));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX-3));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX-2));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX-1));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX+1));
    changeCellClass(cell,"death")

}

function createHeavySpaceShipPattern(heigh,width){
    var posX, posY;

    clearBoard(heigh,width)
    posY=heigh/2
    posX=width/2;

    cell=document.getElementById("cell-"+(posY-2)+"-"+(posX));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-2)+"-"+(posX+1));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY-1)+"-"+(posX-2));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY-1)+"-"+(posX+3));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY)+"-"+(posX-3));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX-3));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+1)+"-"+(posX+3));
    changeCellClass(cell,"death")

    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX-3));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX-2));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX-1));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX+1));
    changeCellClass(cell,"death")
    cell=document.getElementById("cell-"+(posY+2)+"-"+(posX+2));
    changeCellClass(cell,"death")

}

heigh=30;
width=60;

createBoard(heigh,width);
windowReszie();

$(window).on('resize', function(){windowReszie()});
$("#sl-block").on("click",function(){createBlockPattern(heigh,width)})
$("#sl-bee-hive").on("click",function(){createBeeHivePattern(heigh,width)})
$("#sl-loaf").on("click",function(){createLoafPattern(heigh,width)})
$("#sl-boat").on("click",function(){createBoatPattern(heigh,width)})
$("#sl-tub").on("click",function(){createTubPattern(heigh,width)})
$("#o-blinker").on("click",function(){createBlinkerPattern(heigh,width)})
$("#o-toad").on("click",function(){createToadPattern(heigh,width)})
$("#o-beacon").on("click",function(){createBeaconPattern(heigh,width)})
$("#o-pulsar").on("click",function(){createPulsarPattern(heigh,width)})
$("#o-penta-decathlon").on("click",function(){createPentaDeclathonPattern(heigh,width)})
$("#ss-glidder").on("click",function(){createGliderPattern(heigh,width)})
$("#ss-light-wigth").on("click",function(){createLightSpaceShipPattern(heigh,width)})
$("#ss-middle-weight").on("click",function(){createMiddleSpaceShipPattern(heigh,width)})
$("#ss-heavy-weight").on("click",function(){createHeavySpaceShipPattern(heigh,width)})
$("#clean-btn").on("click",function(){clearBoard(heigh,width)})