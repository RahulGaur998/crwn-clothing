import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Iqj1XSBP2Qha6xnFDuxIkcJMsEs7bLu75dyMYzQYy3e1umK6Et2jJAyKfbr3Y5xjVcYNmGlWyvMUhparY9e2dMl008TI7npz4';

    const onToken = token =>  {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label= 'Pay Now'
            name= 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken} 
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;