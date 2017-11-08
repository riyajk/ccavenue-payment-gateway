const config = require('config')
const ccav = require('../commons/ccavutil.js');

/**
 *  This handler will responsible for saving transaction responce details in
 * given table.
 * 
 */

module.exports = (router) => {

    router.post('/', (objRequest, objResponse, nextMiddleware) => {

        var ccavEncResponse = '',
            ccavResponse = '',
            workingKey = config.ccavenue.workingKey, //working Key provided by CCAvenue
            ccavPOST = '';

        try {
            let encryption = objRequest.body.encResp;
            ccavResponse = ccav.decrypt(encryption, workingKey);
            let jsonResponseField = {};
            const arrCcavEncResponse = ccavResponse.split('&');
            arrCcavEncResponse.forEach(function (strOneField) {
                let arrField = strOneField.split('=');
                jsonResponseField[arrField[0]] = arrField[1];
            });
            //jsonResponseField will decrypted data sent by CCAevenue.

            if (jsonResponseField.order_status.toLowerCase() == "success") {
                objResponse.send("Success");
            } else if (jsonResponseField.order_status.toLowerCase() == "failure") {
                objResponse.send("Failure");
            } else if (jsonResponseField.order_status.toLowerCase() == "aborted") {
                objResponse.send("Aborted");
            } else {
                objResponse.send("Security Error. Illegal access detected");
            }
        } catch (Exceptions) {
            console.log(Exceptions);
        }
    });
}