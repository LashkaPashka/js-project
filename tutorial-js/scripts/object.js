const products = [
    {
        name: 'socks',
        price: 1000,
    },

    {
        name: 'jockets',
        price: 1500,
    },

    {
        name: 'backpack',
        price: 800,
    }
];

const basket = [];

products.forEach((val, index) =>{
    const {name, price} = val;
    html = `<p>${name}   ${price}</p> <button class="js-add-basket">Add in bascket</button>`;
    document.querySelector('.container').innerHTML += html; 
})



document.querySelectorAll('.js-add-basket').forEach((val, index) =>{
    val.addEventListener('click', () =>{
        basket.push(products[index]);
    })
});