var myarray=[];
    
var output=document.querySelector("#output");
var text=document.querySelector("#text");
var btn=document.querySelector("#btn");


function click(){
    const row=document.createElement("tr");
    const firstColumn=document.createElement("td");
    row.appendChild(firstColumn);
    const secondColumn=document.createElement("td");
    row.appendChild(secondColumn);
    const rowNumber=document.createTextNode(myarray.length+1 +".");
    firstColumn.appendChild(rowNumber);
    const list=document.createTextNode(text.value);
    secondColumn.appendChild(list);
    const thirdColumn=document.createElement("td");
    const actionButton=document.createElement("button");
    thirdColumn.appendChild(actionButton);
    row.appendChild(thirdColumn);
    const actionButtonText=document.createTextNode("Done");
    actionButton.appendChild(actionButtonText);
    const fourthcolumn=document.createElement('td');
    const fourthcolumnbtn=document.createElement('button');
    fourthcolumn.appendChild(fourthcolumnbtn);
    fourthcolumnbtn.appendChild(document.createTextNode('Edit'));
    row.appendChild(fourthcolumn);
    if(text.value.trim() === ""){
        //tr.target.style="display:none";
        return;
    }
    fourthcolumnbtn.onclick=function(){
        var holder=secondColumn.innerText;
        var i=text.value;
        var change=secondColumn.innerText;
        change=change.replace(holder,i);
        holder=i;
        secondColumn.innerText=change;
        text.value='';

    }
    actionButton.onclick=function(){
        this.parentElement.parentElement.style="text-decoration:line-through";
    }
    
    
    myarray.push(text.value);
    output.appendChild(row);
    text.value= null;
}
btn.addEventListener('click',click);