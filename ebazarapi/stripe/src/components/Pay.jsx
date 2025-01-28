import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51QSOwkD8lygotTYmp1ID77Mm8JeoxvrZhoLO81hIo8TV3FnqGlF151ngcoBle83FKzB2AtImQf1eFSmpOiv9GIQt00kZfzRz39";

const Pay = () => {
    const onToken = (token) => {
        console.log(token); // Handle the token here, usually send it to your backend for processing
    }
    console.log(KEY); 
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft:"auto",
            }}
        >
            <StripeCheckout 
                name='CUET E-Bazar'
                image='https://scontent.fdac146-1.fna.fbcdn.net/v/t39.30808-6/465039348_1114128644049931_7258405524571724906_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFURpEjFzKRIvEqnRBHSpZRy_maUIyI3lrL-ZpQjIjeWkmoI7Rk9Vefa3kkLmiq1ypWjX7IS2b4jhx7OefZmtUk&_nc_ohc=zbKOFTcyFYwQ7kNvgF2ZLr2&_nc_zt=23&_nc_ht=scontent.fdac146-1.fna&_nc_gid=AEN4GRtsNiSbpn_7t5ynbup&oh=00_AYBFRgeWzVVIBFiGvuiXTh2dmxie5s7c2Jnqr2WxtxpfXA&oe=6757B9BE'
                billingAddress
                shippingAddress
                description="Your total is 20 dollars"
                amount={2000} // Amount in cents (2000 cents = 20 dollars)
                token={onToken}
                stripeKey={KEY}
            >
                <button
                    style={{
                        border: "none",
                        width: 120,
                        borderRadius: 5,
                        padding: "20px",
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: 600,
                        cursor: "pointer",
                    }}
                >
                    Pay Now
                </button>
            </StripeCheckout>
        </div>
    );
};

export default Pay;
