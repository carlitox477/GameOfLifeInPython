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
        //row=document.createElement("div");
        //row.classList.add("row")
        
        for (var j=0;j<width;j++){
            cell=document.createElement("td")
            //cell=document.createElement("div")
           
            cell.id= "cell-"+i+"-"+j;
            cell.classList.add("cell","death")
            //cell.addEventListener("click",changeCellClass(cell.id,"death"))
            cell.onclick=function(){changeCellClass(this,"death")};
            //cell.onmousedown=function(){changeCellClass(this,"death")};
            cell.onmouseover=function(){this.style.backgroundColor="yellowgreen"};
            cell.onmouseleave=function(){this.style.backgroundColor="darkcyan"};
            //cell.addEventListener("click",console.log(cell.id))
            row.appendChild(cell);
        }
        table.appendChild(row)
    }
}

function windowReszie(){
    var size =$("td").width();
    $("td").height(size);
  }

function changeCellClass(cell,currentClass){
    console.log(cell.id)
    console.log(currentClass)
    cell.classList.remove(currentClass)
    if(currentClass=="death"){
        cell.classList.add("live")
        currentClass="live"
        cell.style.backgroundColor="yellowgreen";
        cell.onmouseover=function(){this.style.backgroundColor="darkcyan"};
        cell.onmouseleave=function(){this.style.backgroundColor="yellowgreen"};
        console.log(cell.id+" 've changed to live")
    }else{
        cell.classList.add("death")
        currentClass="death"
        cell.style.backgroundColor="darkcyan";
        cell.onmouseover=function(){this.style.backgroundColor="yellowgreen"};
        cell.onmouseleave=function(){this.style.backgroundColor="darkcyan"};
        console.log(cell.id+" 've changed to death")
        
    }
    cell.onclick=function(){changeCellClass(this,currentClass)};
}


heigh=30;
width=60;

createBoard(heigh,width);
windowReszie();

$(window).on('resize', function(){windowReszie()});