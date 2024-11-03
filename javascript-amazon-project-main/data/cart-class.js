class Cart{
    cartItems; //public field
    #localStorageKey; //private field

    constructor(localStorageKey){
        this.#localStorageKey = localStorageKey;
        this.resetCart();
    }

    resetCart(){
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryId: 1},
        {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryId: 2}
        ];
    }
        SaveBasket(){
            localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }

    addToBasket(productId){
        let cartCurrent;
        this.cartItems.forEach((element) => {
            if (productId !== undefined){
            if (productId === element.productId){
            cartCurrent = element;
            }}
        })

        if (cartCurrent)
            cartCurrent.quantity += 1;
        else if (productId !== undefined){
            this.cartItems.push({
            productId: productId,
            quantity: 1,
            deliveryId: 1
        })}

        this.SaveBasket();
    }

    deleteToBasket(productId)
    {
        this.cartItems.forEach((item, index) => {
        if (productId === item.productId)
            this.cartItems.splice(index, 1);
        })
        this.SaveBasket(); 
    }

    updateOption(productId, deliveryOptionId)
    {
        let currentItem;

        this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId)
           currentItem = cartItem;
        })


        currentItem.deliveryId = Number(deliveryOptionId);
        this.SaveBasket();
    }
}


const cart = new Cart('cart-oop');
const cartBusiness = new Cart('business-oop');


console.log(cart);
console.log(cartBusiness);