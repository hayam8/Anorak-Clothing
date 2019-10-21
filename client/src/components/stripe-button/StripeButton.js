import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  // integer dollar amount multiplied by 100 to represent price in cents
  const priceStripe = price * 100;

  const publishableKey = "pk_test_YY2J9XlCt3UHKqoNGEI5Sq5600zaYCiCko";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Anorak Clothing Ltd.'
      billingAddress
      shippingAddress
      image='http://svgshare.com/i/FWh.svg'
      description={`Your total is $${price}`}
      amount={priceStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
