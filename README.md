**git clone git@gitlab.com:riyajk54/ccavenue-payment-gateway.git**

**cd ccavenue-payment-gateway**

**npm install**


API :

1. HTTP GET `/get_rsa_key`
2. HTTP POST `/ccav_response_handler`


Update the parameters  in **config/default.json**

```"ccavenue" : {
"RSAKeyUrl" :"https://test.ccavenue.com/transaction/getRSAKey",
"workingKey" : "*******************************",
"accessCode" :"******************************"
}


1. **RSAKeyUrl** : test url for CCAevnue merchant server.
2. **workingKey** : provided by CCAevnue
3. **accessCode** : provided by CCAevnue
