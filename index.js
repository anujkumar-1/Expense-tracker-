function handleForm(event){
    event.preventDefault(); // prevent the page from reloading on form submit

    const priceValue = event.target.price.value
    const descriptionValue = event.target.description.value
    const categoryValue = event.target.category.value

    let userDetail = {
        price: priceValue,
        description: descriptionValue,
        category: categoryValue
    }
    const ulSelector = document.getElementById("ul");

    // creating li element

    const newLiElement = document.createElement( "li" );
    newLiElement.className="expense"
    const newLiElementText = document.createTextNode(`${priceValue} - ${descriptionValue} - ${categoryValue}`);
    newLiElement.appendChild(newLiElementText)
    ulSelector.appendChild(newLiElement)

    // creating delete button

    const deleteButton = document.createElement("button")
    deleteButton.className="del-btn"
    const deleteButtonText = document.createTextNode("Delete")
    deleteButton.appendChild(deleteButtonText)
    newLiElement.appendChild(deleteButton)

    // creating edit button

    const editButton = document.createElement('button')
    const editButtonText = document.createTextNode("Edit")
    editButton.className = "edit-btn";
    editButton.appendChild(editButtonText);
    newLiElement.appendChild(editButton)

    const expenseTracker = document.getElementsByClassName("expense")
    const deltionNode = document.getElementsByClassName("del-btn")
    const editbutton =document.getElementsByClassName("edit-btn")
    // creating border in each li element

    for(let i=0; i<expenseTracker.length; i++){
        expenseTracker[i].style.backgroundColor = "lightgrey" 
        expenseTracker[i].style.listStyle = "none" 
        expenseTracker[i].style.width = "30%" 
        expenseTracker[i].style.margin = "10px" 
        expenseTracker[i].style.padding = "10px" 
        expenseTracker[i].style.borderRadius = "3px" 
        expenseTracker[i].style.border = "2px solid black" 
        expenseTracker[i].style.display = "flex" 
    }

    for(let i=0; i<deltionNode.length; i++){
        deltionNode[i].style.marginLeft  = "7.5rem"
        deltionNode[i].style.backgroundColor  = "tomato"
        deltionNode[i].style.height="2rem" 
        

    }

    for(let i=0; i<editbutton.length; i++){
        editbutton[i].style.marginLeft  = "0.5rem"
        editbutton[i].style.backgroundColor  = "lightyellow"
        editbutton[i].style.height="2rem"

    }


    

    // storing in the local storage

    localStorage.setItem(descriptionValue, JSON.stringify(userDetail))


    //  deleting item from list & local storage

    ulSelector.addEventListener("click", function(event){
        event.preventDefault()
        if(event.target.classList.contains("del-btn")){
            const elementToDelete = event.target.parentElement;
            
            const strOfLocalStorage = elementToDelete.firstChild.textContent;
            let str = strOfLocalStorage.split(" - ")
        
            const key = str[1]

            localStorage.removeItem(key)
            ulSelector.removeChild(elementToDelete)

        }
    })

    // adding edit functionality

    ulSelector.addEventListener("click", function(event){
        event.preventDefault()
        if(event.target.classList.contains("edit-btn")){
            const editElementToDelete = event.target.parentElement;

            const strEditButton = editElementToDelete.firstChild.textContent

            
            const str = strEditButton.split(" - ")
            document.getElementById("price").value = str[0]
            const editKey = str[1]
            document.getElementById("descriptionOfProduct").value = editKey
            
            localStorage.removeItem(editKey)
            ulSelector.removeChild(editElementToDelete)
             
        }
    })





}