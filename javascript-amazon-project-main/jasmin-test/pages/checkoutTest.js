import {reverseHTMLCheckOut} from '../../scripts/project/pageCheckout.js'
import {resetCart} from '../../data/bascket.js'

describe("RenderPage", () => {
    it("Template #1", () => {
        document.querySelector(".js-test-container").innerHTML = `
        <div class="js-code-order-summary"></div>
        <div class="js-code-payment-summary"></div>
        `;

        const productdId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
        const productdId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: productdId1,
                quantity: 2,
                deliveryId: 1
              },
                {
                  productId: productdId2,
                  quantity: 1,
                  deliveryId: 2
                }])
        });

        resetCart();
        reverseHTMLCheckOut();


        expect(document.querySelectorAll('.cart-item-container').length).toEqual(2);
        
        expect(
            document.querySelector(`.js-test-code-${productdId1}`).innerText
        ).toContain('Quantity: 2');

        document.querySelector(`.js-test-delete-${productdId2}`).click();
        expect(document.querySelectorAll('.cart-item-container').length).toEqual(1);

        document.querySelector('.js-test-container').innerHTML = '';
    })
})