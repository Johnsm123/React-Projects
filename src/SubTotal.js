import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
  return <div>
    className="subtotal">
    <currencyFormat
       renderText={(value) => (
        <>
          <p>
            Subtotal (0 items): <strong>0</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
        </> 
       )}
       />
  </div>

 )
}
export default Subtotal;
