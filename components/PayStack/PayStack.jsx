import React from 'react';
import PaystackWebView from "react-native-paystack-webview";


const PayStack = () => {
    return (
        <PaystackWebView
            buttonText="Pay Now"
            showPayButton={true}
            paystackKey="pk_test_7130b4dfd9558bafe8f83043a8d50455af44f25b"
            amount={10000}
            billingEmail="emy@something.com"
            billingMobile="09787377462"
            billingName="Emyboy"
            ActivityIndicatorColor="green"
            SafeAreaViewContainer={{ marginTop: 5 }}
            SafeAreaViewContainerModal={{ marginTop: 5 }}
            onCancel={(e) => {
                // handle response here
            }}
            onSuccess={(e) => {
                // handle response here
            }}
            autoStart={false}
        />
    )
}

export default PayStack
