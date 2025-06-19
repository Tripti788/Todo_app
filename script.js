const inputbox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container"); 

function Task() {
    if (inputbox.value === '') {
        alert("you must  write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);

        let cross = document.createElement("cross");
        cross.innerHTML="\u00d7";
        li.appendChild(cross);

    };
    inputbox.value="";
    saveData();

    
}

listContainer.addEventListener("click",function(e){
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName==="CROSS"){
    e.target.parentElement.remove();
    saveData();
}
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}

showTask();