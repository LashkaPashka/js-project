let bookings = [];

function WorkElement(){
    name_hotel = document.querySelector('.js-code-name').value;
    date_from = document.querySelector('.js-code-date_from').value;
    date_to = document.querySelector('.js-code-date_to').value;

    bookings.push({
        name: name_hotel,
        date_from: date_from,
        date_to: date_to,
    })
    OutputDisplay();
}

function OutputDisplay(){
    let todoListHtml = '';
    bookings.forEach((value, index) => {
        const {name, date_from, date_to} = value;
        html = `
        <div>${name}</div>
        <div>${date_from}</div>
        <div>${date_to}</div>
        <button class="js-delete-todo-button">Delete</button> 
      `;;
        todoListHtml += html;
    });

document.querySelector('.add-bookings').innerHTML = todoListHtml;


document.querySelectorAll('.js-delete-todo-button').forEach((val, index) => {
    val.addEventListener('click', () =>{
        bookings.splice(index, 1);
        OutputDisplay();
    })
})

}