function attachEventListeners(listItem) {
    const deleteButton = listItem.querySelector(".delete-button");
    const changeButton = listItem.querySelector(".change-button");
    const completeButton = listItem.querySelector(".complete-button");

    deleteButton.addEventListener('click', function() {
        listItem.remove();
    });
    
    completeButton.addEventListener('click', function() {
        const textDiv = listItem.querySelector('.text-div');
        textDiv.style.textDecoration = 'line-through';
        textDiv.style.fontStyle = 'italic';
        completeButton.style.backgroundColor = 'green';
    });
    
    changeButton.addEventListener('click', function() {
        listItem.innerHTML = `
            <button class="complete-button"></button>
            <div class="text-div">
                <input type="text" class="temporary-input" placeholder="Type new text here..">
            </div>
            <div class="buttons-container">
                <button class="change-button"><img src="icons/pencil.png" class="pencil-image"></button>
                <button class="delete-button"><img src="icons/delete2.png" class="delete-image"></button>
            </div>`;

        const tempInput = listItem.querySelector('.temporary-input');
        tempInput.focus();

        tempInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const newText = tempInput.value.trim();
                if (newText !== '') {
                    listItem.innerHTML = `
                        <button class="complete-button"></button>
                        <div class="text-div">${newText}</div>
                        <div class="buttons-container">
                            <button class="change-button"><img src="icons/pencil.png" class="pencil-image"></button>
                            <button class="delete-button"><img src="icons/delete2.png" class="delete-image"></button>
                        </div>`;
                    attachEventListeners(listItem);
                }
            }
        });
    });
}



















const listText = document.querySelector(".list");
const addButton = document.querySelector(".add");
const addText = document.querySelector(".input");



addText.addEventListener('keypress',function(e){
    if (e.key === 'Enter')
        addButton.click();
})

addButton.addEventListener('click', function(){ /* add new task function*/
    if (addText.value.trim() === ''){
        addText.placeholder = 'Your task must have a name!';
        addText.value = "";
        setTimeout(() =>{
            addText.placeholder = "Type a new task...";
        },2000)
        return;
    }
    else{
        const listItem = document.createElement('li');
        listItem.className = "adding";
        listItem.innerHTML = `
        <button class = "complete-button"> </button>
        <div class = "text-div">
        ${addText.value}
        </div>
        <div class = "buttons-container">
            <button class = "change-button"> <img src = "icons/pencil.png" class = "pencil-image"> </button>
            <button class = "delete-button"> <img src = "icons/delete2.png" class = "delete-image"> </button>
        </div>`;
            listText.appendChild(listItem);
        addText.value = "";

        const deleteButton = listItem.querySelector(".delete-button");
        const changeButton = listItem.querySelector(".change-button");
        const completeButton = listItem.querySelector(".complete-button");

        deleteButton.addEventListener('click', function(){
            listItem.remove();
        });
        completeButton.addEventListener('click', function(){
            const textDiv = listItem.querySelector('.text-div');
            textDiv.style.textDecoration = 'line-through';
            textDiv.style.fontStyle ='italic';
            textDiv.style.textDecoration = 'line-through';
            completeButton.style.backgroundColor = 'green';

        });
        changeButton.addEventListener('click',function(){
            listItem.innerHTML = `
                <button class = "complete-button"> </button>
                <div class = "text-div">
               <input type = "text" class = "temporary-input" placeholder = "Type new text here..">
                </div>
                <div class = "buttons-container">
                    <button class = "change-button"> <img src = "icons/pencil.png" class = "pencil-image"> </button>
                    <button class = "delete-button"> <img src = "icons/delete2.png" class = "delete-image"> </button>
                </div>`;

            const tempInput = listItem.querySelector('.temporary-input');
            tempInput.focus();

            tempInput.addEventListener('keypress', function(e){
                if (e.key === 'Enter'){
                    const newText = tempInput.value.trim();
                    if (newText !== ''){
                        listItem.innerHTML = `
                    <button class = "complete-button"> </button>
                    <div class = "text-div">
                        ${newText}
                    </div>
                    <div class = "buttons-container">
                        <button class = "change-button"> <img src = "icons/pencil.png" class = "pencil-image"> </button>
                        <button class = "delete-button"> <img src = "icons/delete2.png" class = "delete-image"> </button>
                    </div>`;
                    }
                    attachEventListeners(listItem);
                }
                
            })










        });




    }
    

});


