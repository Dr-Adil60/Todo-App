let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inpt = document.querySelector("input");

btn.addEventListener("click", function(){
  let  item = document.createElement("li");
    item.innerText=inpt.value;

    let delbtn= document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    
    item.appendChild(delbtn);
    ul.appendChild(item);
     inpt.value ="";
});

ul.addEventListener("click",function (event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem= event.target.parentElement;
       listItem.remove();
        console.log("deleted");
    }
     
})






    
