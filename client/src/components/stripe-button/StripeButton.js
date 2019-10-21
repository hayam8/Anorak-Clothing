import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  // integer dollar amount multiplied by 100 to represent price in cents
  const priceForStripe = price * 100;

  const publishableKey = "pk_test_YY2J9XlCt3UHKqoNGEI5Sq5600zaYCiCko";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => {
        alert("Payment Successful!");
      })
      .catch(error => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Anorak Clothing Ltd.'
      billingAddress
      shippingAddress
      image='http://svgshare.com/i/FWh.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
