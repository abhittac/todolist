//take user input and Add button store user input


document.getElementById("add").addEventListener("click",getdata);

function getdata(e){
  

  var user=document.getElementById("user").value;
//create li append user data
if(user=="")
{
  alert("Add Some Task!!!")
}
else{
  var user=document.getElementById("user").value;
var li=document.createElement("li");
li.innerText=user;

var btn=document.createElement("i");
btn.className="fa fa-close";
li.append(btn);
//append into parent 
document.querySelector("#parent").append(li);
document.getElementById("user").value="";
}
};

//remove function add event on parent


document.getElementById("parent").addEventListener("click",remove);
function remove(e)
{
  if(e.target.className==="fa fa-close")
  {e.target.parentElement.remove();
  }
};
