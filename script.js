//take user input and Add button store user input

var user=document.getElementById("user").value;
document.getElementById("user")="";
document.getElementById("add").addEventListener("click",getdata);
function getdata(e){
//create li append user data
var li=document.createElement("li");
li.innerText=user;
var btn=document.createElement("i");
btn.className="fa fa-close";
li.append(btn);
//append into parent 
var one=document.querySelector("#parent").append(li);
e.stopPropagation();
};

//remove function add event on parent


document.getElementById("parent").addEventListener("click",remove);
function remove(e)
{
  if(e.target.className==="fa fa-close")
  {e.target.parentElement.remove();
  }
};
