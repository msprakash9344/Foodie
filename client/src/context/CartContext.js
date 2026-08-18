import {createContext, useState} from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    const alreadyInCart = cart.find((item) => item.id === product.id);
     if (alreadyInCart) {
      alert("This product is already added to the cart!");
      return;
    }
    setCart(prevCart => [...prevCart, product])
    alert(`${product.name} added to cart!`);
  }

  const [selectedFood, setSelectedFood] = useState(null);
    const [orderDetails, setOrderDetails] = useState({
      name: "",
      contact: "",
      address: "",
      quantity: 1,
      paymentMethod: "Cash on Delivery",
      totalPrice: 0,
    });
  
    const handleOrderNow = (food) => {
      setSelectedFood(food);
      setOrderDetails({
        name: "",
        contact: "",
        address: "",
        quantity: 1,
        paymentMethod: "Cash on Delivery",
        totalPrice: food.offerprice || food.price,
      });
    };

  const removeFromCart = id => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
     alert("Product removed from cart!");
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        handleOrderNow,
        orderDetails,
        selectedFood,
        setOrderDetails,
        setSelectedFood,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider