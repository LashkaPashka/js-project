import { bascket, deleteToBasket, updateOption, SaveBasket } from "../../data/bascket.js";
import { deliveryOptions } from "../../data/deliveryOption.js";
import { products } from "../../data/products.js";
import { CountPrice } from '../utils/utils.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { PaymentOrder } from "./formPayment.js";


export function reverseHTMLCheckOut()
{
    let toListHtml = '';


    bascket.forEach((cartval) => {
        const currentId = cartval.productId;
        let machigan;
        products.forEach((cartitem) =>{
            if (currentId === cartitem.id)
                machigan = cartitem;
        })
        let hmtl = `
        <div class="cart-item-container js-cart-item-container-${machigan.id}">
            <div class="delivery-date js-code-actual-${machigan.id}">
            <p class="js-code-actual-${machigan.id}">
                Delivery date: Tuesday, June 21
            </p> 
                
                </div>

            <div class="cart-item-details-grid">
                <img class="product-image"
                src="${machigan.image}">

                <div class="cart-item-details">
                    <div class="product-name">
                    ${machigan.name}
                    </div>
                    <div class="product-price">
                    $${CountPrice(machigan.priceCents)}
                    </div>
                    <div class="product-quantity js-test-code-${machigan.id}">
                    <span>
                        Quantity: <span class="quantity-label">${cartval.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                        Update
                    </span>
                    <span class="delete-quantity-link link-primary 
                    js-test-delete-${machigan.id}
                    js-code-delete-product"
                    data-product-id="${machigan.id}">
                        Delete
                    </span>
                    </div>
                </div>

                <div class="delivery-options">
                    <div class="delivery-options-title">
                    Choose a delivery option:
                    ${GenerateHTML(machigan, cartval)}
                    </div>
                </div>
                </div>
            </div>
        `
        toListHtml += hmtl;
    })


    document.querySelector('.js-code-order-summary').innerHTML = toListHtml;


    document.querySelectorAll('.js-code-delete-product').forEach((element) =>{
        element.addEventListener('click', ()=>{
        const productId = element.dataset.productId;
        deleteToBasket(productId);
        document.querySelector(`.js-cart-item-container-${productId}`).remove();
        PaymentOrder();
        SaveBasket();
    })
    })



    function GenerateHTML(machigan, cartval){
        let html = '';

        deliveryOptions.forEach((element) => {
            const today = dayjs();
            const deliveryDAYS = today.add(element.diffDays, 'days');

            const dayDelivery = deliveryDAYS.format('dddd, MMMM D');
            let ResultPrice;

            (element.price === 0) ? ResultPrice = 'FREE' : ResultPrice = `$${CountPrice(element.price)} -`;    
            
            const ischecked = cartval.deliveryId === element.id ? 'checked' : '' 

            html += `
            </div>
            <div class="delivery js-code-delivery"
            data-product-id="${machigan.id}"
            data-delivery-id="${element.id}">  
            <input type="radio" ${ischecked}
                class="delivery-option-input"
                name="delivery-option-${machigan.id}
                ">
                <div>
                <div class="delivery-option-date">
                    ${dayDelivery}
                </div>
                <div class="delivery-option-price">
                    ${ResultPrice} Shipping
                </div>
                </div>
            `    
        })

        return html;
    }



    document.querySelectorAll('.js-code-delivery').forEach((deliveryOption) =>
    {
        deliveryOption.addEventListener('click', () => {
            
            const {productId, deliveryId} = deliveryOption.dataset; 
            
            updateOption(productId, deliveryId);
            PaymentOrder();
            
            let item;
            deliveryOptions.forEach((element) => {
            if (element.id === Number(deliveryId))
                item = element;
            })
            
            const today = dayjs();
            const deliveryDAYS = today.add(item.diffDays, 'days');

            const dayDelivery = deliveryDAYS.format('dddd, MMMM D');
            
            
            document.querySelector(`.js-code-actual-${productId}`).innerHTML = `Delivery date: ${dayDelivery}`;
        })
    }
    )
}