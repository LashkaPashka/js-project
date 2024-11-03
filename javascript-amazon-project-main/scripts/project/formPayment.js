import { bascket } from "../../data/bascket.js";
import { products } from "../../data/products.js";
import { deliveryOptions } from "../../data/deliveryOption.js";
import {CountPrice} from '../utils/utils.js';


export function PaymentOrder()
{
    let countItems = 0; let shipping = 0;
    let totalQuantity = 0;
    
    bascket.forEach((cartItem => {
        let mathcingItem;
        totalQuantity += cartItem.quantity;

        products.forEach((productItem) =>{
            if (productItem.id === cartItem.productId)
                mathcingItem = productItem;
        })

        countItems += cartItem.quantity * mathcingItem.priceCents;

    deliveryOptions.forEach((deliveryOption) => {
        if (cartItem.deliveryId === deliveryOption.id)
            mathcingItem = deliveryOption;
    })
        shipping += mathcingItem.price;

    }));

    const TotalBeforeTax = countItems + shipping;
    const EstimatedTax =  TotalBeforeTax * 0.1;

    const TotalOrder = EstimatedTax + TotalBeforeTax;
    
    let html = `
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${totalQuantity}):</div>
            <div class="payment-summary-money">$${CountPrice(countItems)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${CountPrice(shipping)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${CountPrice(TotalBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${CountPrice(EstimatedTax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${CountPrice(TotalOrder)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
    `

    document.querySelector('.js-code-payment-summary').innerHTML = html;

}