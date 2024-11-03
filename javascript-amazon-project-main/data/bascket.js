export let bascket;

resetCart();

export function resetCart(){
    bascket = JSON.parse(localStorage.getItem('bascket')) || [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryId: 1
    },
      {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryId: 2
      }
  ];
}


export function SaveBasket(){
  localStorage.setItem('bascket', JSON.stringify(bascket));
}


export function addToBasket(productId){
    let cart;
    bascket.forEach((element) => {
      if (productId !== undefined){
        if (productId === element.productId){
          cart = element;
      }}
    })
    
      if (cart)
        cart.quantity += 1;
      
      else if (productId !== undefined){
        bascket.push({
            productId: productId,
            quantity: 1,
            deliveryId: 1
          })}
          
          SaveBasket();     
}


export function deleteToBasket(productId)
{
  bascket.forEach((item, index) => {
    if (productId === item.productId)
      bascket.splice(index, 1);
  })
  SaveBasket(); 
}


export function updateOption(productId, deliveryOptionId)
{
  let currentItem;

    bascket.forEach((cartItem) => {
        if (productId === cartItem.productId)
          currentItem = cartItem;
    })


    currentItem.deliveryId = Number(deliveryOptionId);
    SaveBasket();
}
