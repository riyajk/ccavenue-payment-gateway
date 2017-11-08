const request = require('request'),
    config = require('config'),
    fs = require('fs'),
    path = require('path'),
    caFile = path.resolve(__dirname, '../commons/cacert.pem');

    /**
     * @description : get RSA KEY to be used for Payment details Encryptions.
     */
module.exports = (router) => {

    router.post('/', (objRequest, objResponse, next) => {
        try {
            const strOrderId = objRequest.body && objRequest.body.order_id; // random generated id sent from Mobile App/Web View.
            const strRSAUrl = config.ccavenue.RSAKeyUrl; //CCAvenue test url.Change it when migrating to prod.
            const accessCode = config.ccavenue.accessCode; //access code provided by CCAvenue.
            
            request.post({
                url: strRSAUrl,
                agentOptions: {
                    ca: fs.readFileSync(caFile)
                },
                form: {
                    access_code: accessCode,
                    order_id: strOrderId
                }
            }, function (error, response, body) {
                objResponse.send(body);
            });
        } catch (Exceptions) {
            console.log(Exceptions);
        }

    });
}