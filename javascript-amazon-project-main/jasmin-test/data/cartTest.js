import {bascket, addToBasket, resetCart} from '../../data/bascket.js'

describe("Add products in cart", () =>{
    it('adds a exsting product in cart', () => {
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 1,
                deliveryId: 1,
            }])
        });

        resetCart();
        addToBasket("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");

        expect(bascket[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(bascket[0].quantity).toEqual(2);
    })

    it("add a new product in cart", () =>{
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        })

        resetCart();
        addToBasket("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");

        expect(bascket.length).toEqual(1);
        expect(bascket[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(bascket[0].quantity).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    
    })
})