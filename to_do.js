const btn = document.querySelector('.add_btn');

let items = [];
let dates = [];
let times = [];
display();

btn.addEventListener("click", addToDo);

function addToDo(){
    let toDoElement = document.querySelector('.todo_item');
    let item = toDoElement.value;
    let dateElement = document.querySelector('.todo_date');
    let date = dateElement.value;
    let timeElement = document.querySelector('.todo_time');
    let time1 = timeElement.value;

    items.push(item);
    dates.push(date);
    times.push(time1);

    localStorage.setItem(item, date);
    display();
    toDoElement.value = '';
    dateElement.value = '';
    timeElement.value = '';

}

function display(){
    let container = document.querySelector('.todo_container');

    let newHtml = ''
    
    for(let i=0; i<items.length; i++)
    {
        newHtml += `
            <span class="output">${items[i]}</span>
            <span class="output">${dates[i]}</span>
            <span class="output">${times[i]}</span>
            <button class="btn_delete" onClick="items.splice(${i}, 1);
            dates.splice(${i}, 1); times.splice(${i}, 1); localStorage.removeItem(items[${i}]); display();">Delete</button>
        `;
    }
    container.innerHTML = newHtml;
}

