import React, { useContext, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import QRCode from 'react-qr-code';



const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount} = useContext(CartContext);
  const [checkoutClicked, setCheckoutClicked] = useState(false);
  
  // to show qr code for 10sec and redirect, and products to 0
  const [showQRCode, setShowQRCode] = useState(false);
  const handleCheckoutClick = () => {
    setCheckoutClicked(true);
    setShowQRCode(true);
    setTimeout(() => {
      setShowQRCode(false);
      setCheckoutClicked(false);
      item.length = 0;
    }, 5000);
    return showQRCode;
}


  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="heading">
            
            <h3>A I Biller</h3>
          </div>

        </header>

        <section className="main-cart-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            <span className="total-items-count">0</span> items in shopping cart
          </p>
          <div className="cart-items">
          <div className="cart-items-container">
            <h1 className="place">Place the Items</h1>
          </div>
        </div>
        </section>
      </>
    );
  }

  if(checkoutClicked) {
    return (
      <>
        <header>
          <div className="heading">
            
            <h3>A I Biller</h3>
          </div>

        </header>

        <section className="main-cart-section">
          <h1>Shopping Cart Checkout Page</h1>
          <p className="total-items">
            Pay<span className="total-items-count"> {totalAmount}</span> Rs and enjoy the day.
          </p>
          <div className="cart-items">
          <div className="cart-items-container">
            <div className="qr">
            <h2>Scan the Code to pay</h2>
            <QRCode value={`upi://pay?pa=abdulanzil421@okhdfcbank&pn=ABDUL ANZIL B&tn=payment&am=${totalAmount}&cu=INR`} />
            <h2>Total Amount : {totalAmount} </h2>
            </div>
          </div>
        </div>
        </section>
      </>
    )
  }
 


  return (
    <>
      <header>
        <div className="heading">
          
          <h3>A I Biller</h3>
        </div>

        
      </header>

      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">{totalItem} </span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="cart-total">
          <h3>
            Cart Total : <span>{totalAmount}₹</span>
          </h3>
          {checkoutClicked ? null : <button className="cleckout-btn" onClick={handleCheckoutClick}>Checkout</button>}
          <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
        </div>
        
      </section>
    </>
  );
};

export default ContextCart;
