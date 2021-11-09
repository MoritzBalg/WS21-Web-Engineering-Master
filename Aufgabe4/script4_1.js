function addItem(){
    let tb_item = document.getElementById("tb_item");
    let list = document.getElementById("itemList");

    if(tb_item.value === ""){
        alert("Please enter an item");
    }else{
        //Textbox not empty. Insert into list
        const listElement = document.createElement("li");
        const delButton = document.createElement("button");
        const counter = document.createElement("input");
        counter.setAttribute("type", "number");
        counter.setAttribute("value", "1");
        delButton.innerText = "Delete";
        delButton.addEventListener("click", event=>list.removeChild(listElement));
        listElement.textContent = tb_item.value + " ";
        list.appendChild(listElement);
        listElement.appendChild(counter);
        listElement.appendChild(delButton);
    }
}