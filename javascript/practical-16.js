 //Selector 
var todoInput=document.querySelector(".todo-input");
var todoButton=document.querySelector(".todo-button");
var todoList=document.querySelector(".todo-list");

//event
todoButton.onclick=create;
todoList.onclick=checkdelete;

//function
function create(e){
 e.preventDefault();

   if(todoInput.value==""){
       alert("Text field cannot be Emptied");
   }
   else{
    
    var newdiv=document.createElement("div");
    newdiv.classList.add("todo");

    var newli=document.createElement("li");
newli.classList.add("todo-item");
newli.innerHTML=todoInput.value;
newdiv.appendChild(newli);
todoInput.value="";

var checkbtn=document.createElement("button");
checkbtn.classList.add("check-btn");
checkbtn.innerHTML='<i class="fa fa-check"></i>';
newdiv.appendChild(checkbtn);

var delbtn=document.createElement("button");
delbtn.classList.add("delete-btn");
delbtn.innerHTML='<i class="fa fa-trash"></i>';
newdiv.appendChild(delbtn);

todoList.appendChild(newdiv);
   }

}

function checkdelete(e){
var item=e.target;
if(item.classList[0]==="delete-btn"){
    var parent=item.parentNode;
    var mes=confirm("Do you want to delete?");
  if(mes){
    parent.remove();
  }   
}
if(item.classList[0]==="check-btn"){
    var parent=item.parentNode;
   parent.classList.toggle("completed");
}

}


