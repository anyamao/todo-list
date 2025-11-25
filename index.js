function saveTasks(){
    const tasks = [];
    document.querySelectorAll('.adding').forEach(item =>{
        tasks.push({
            text: item.querySelector('.text-div').textContent,
            completed: item.querySelector('.text-div').style.textDecoration === 'line-through'
        });
    });
    localStorage.setItem('todos',JSON.stringify(tasks));
}



function loadTasks(){
    const savedTasks = localStorage.getItem('todos');
    if(savedTasks){
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(taskData =>{
            const listItem = document.createElement('li');
            listItem.className = "adding";
            listItem.innerHTML = `
             <button class="complete-button" style = "background-color: ${taskData.completed ? 'green' : 'rgba(255, 255, 255, 0.541)'}"></button>
            <div class="text-div" style = "text-decoration : ${taskData.completed ? 'line-through' : 'none'};
                font-style: ${taskData.completed ? 'italic' : 'normal'}">
                ${taskData.text}
            </div>
            <div class="buttons-container">
                <button class="change-button"><img src="icons/pencil.png" class="pencil-image"></button>
                <button class="delete-button"><img src="icons/delete2.png" class="delete-image"></button>
            </div>`;
            listText.appendChild(listItem);
            attachEventListeners(listItem);
        
        })
    }
}

























function attachEventListeners(listItem) { // reattaching event listeners when chaing the html
    const deleteButton = listItem.querySelector(".delete-button");
    const changeButton = listItem.querySelector(".change-button");
    const completeButton = listItem.querySelector(".complete-button");

    deleteButton.addEventListener('click', function() {
        listItem.remove();
                            saveTasks();
    });
    
    completeButton.addEventListener('click', function() {
        const textDiv = listItem.querySelector('.text-div');
        textDiv.style.textDecoration = 'line-through';
        textDiv.style.fontStyle = 'italic';
        completeButton.style.backgroundColor = 'green';
                            saveTasks();
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
                                        saveTasks();
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
    
                    saveTasks();
});

// functions to change background here!!!!

const backgroundButtonFirst = document.querySelector('.change-background-button');

backgroundButtonFirst.addEventListener('click', function(){
    const currentBackground = document.querySelector('.background-image');
    currentBackground.style.backgroundImage = 'url("../icons/background5.jpg")';

    backgroundButtonFirst.style.backgroundColor = 'white';

    
    backgroundButtonSecond.style.backgroundColor = 'rgba(0, 128, 0, 0)';
    backgroundButtonThird.style.backgroundColor = 'rgba(0, 128, 0, 0)';



})

const backgroundButtonSecond = document.querySelector('.change-second');

backgroundButtonSecond.addEventListener('click',function(){
    const currentBackground = document.querySelector('.background-image');

    currentBackground.style.backgroundImage = 'url("../icons/background3.jpg")';
    backgroundButtonSecond.style.backgroundColor = 'white';

    backgroundButtonFirst.style.backgroundColor = 'rgba(0, 128, 0, 0)';
    backgroundButtonThird.style.backgroundColor = 'rgba(0, 128, 0, 0)';
})


const backgroundButtonThird = document.querySelector('.change-third');

backgroundButtonThird.addEventListener('click',function(){
    const currentBackground = document.querySelector('.background-image');


    currentBackground.style.backgroundImage = 'url("../icons/background6.jpg")';
    backgroundButtonThird.style.backgroundColor = 'white';

    backgroundButtonFirst.style.backgroundColor = 'rgba(0, 128, 0, 0)';
    backgroundButtonSecond.style.backgroundColor = 'rgba(0, 128, 0, 0)';
})


























loadTasks();