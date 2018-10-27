var myarray=[];
    
var output=document.querySelector("#output");
var text=document.querySelector("#text");
var btn=document.querySelector("#btn");

btn.onclick=function(){
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
    if(text.value.trim() === ""){
        //tr.target.style="display:none";
        return;
    }
    actionButton.onclick=function(event){
        this.parentElement.parentElement.style="text-decoration:line-through";
    }
    
    myarray.push(text.value);
    output.appendChild(row);
    text.value= null;
}