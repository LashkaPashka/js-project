import { bascket, addToBasket } from '../data/bascket.js';
import { products } from '../data/products.js';
import { CountPrice } from './utils/utils.js'


let todolistHtml = '';

products.forEach((val) =>{
    let html = `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${val.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${val.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${val.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${val.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${CountPrice(val.priceCents)} 
          </div>

          <div class="product-quantity-container">
            <select class="js-code-options-${val.id}" data-option-id="${val.id}">
              ${ProductQuantity()}
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
          <img src="images/icons/checkmark.png">Added
          </div>

          <button class="add-to-cart-button button-primary 
          js-code-cart" data-product-id="${val.id}">
            Add to Cart
          </button>
        </div>`
        todolistHtml += html;
})


document.querySelector('.js-code-products').innerHTML = todolistHtml;


function CountTotalQuantity(){
  let totalQuantity = 0;
    bascket.forEach((item) => {
        totalQuantity += item.quantity;
    
  })
  document.querySelector('.js-code-quantity').innerHTML = totalQuantity;
}


document.querySelectorAll('.js-code-cart').forEach((val) =>
{
  val.addEventListener('click', () => {
    const {productId} = val.dataset;

    addToBasket(productId);  
    CountTotalQuantity();
  })
})


function ProductQuantity(){
  let html;

  for (let index = 1; index <= 10; index++)
  {
      html += `
      <option value="${index}">${index}</option>
      `
  }

  return html;
}


document.querySelectorAll('.js-code-options').forEach((optionItem) =>{
    
})



// document.querySelectorAll('.js-code-options').forEach((option) =>{
//     option.addEventListener('click', () => {
//       const optionId = option.dataset.optionId;
      
//     }
// )
// })
