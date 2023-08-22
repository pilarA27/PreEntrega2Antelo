import shoppingBag from './assets/shoppingBag.svg'
const CartWidget = () => {
    return(
        <div>
            <img src={shoppingBag} alt="cart-widget" className="cartIcon" />
            0
        </div>
    )
}

export default CartWidget