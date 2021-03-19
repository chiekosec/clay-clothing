import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IVuAkBDrU6Xhlklg0E72TjMlHFfSEQQhFMIzXrLUmcAmMTHpwRBYzU6JtN1fGpDCOixRLH3dCMYrhzPxUq4HaPV00Euwj8But";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CLAY Clothing Ltd."
      billingAddress
      shippingAddress
      // image="../../assets/clay.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
