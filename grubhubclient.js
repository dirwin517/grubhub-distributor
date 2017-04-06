/**
 * Created by daniel.irwin on 4/5/17.
 */

class GrubHub {


    constructor() {
        this.request = require('request');
    }

    connect(username, password) {
        return new Promise((resolve, reject) => {
            this.request({
                method : 'POST',
                url : 'https://api-gtm.grubhub.com/auth',
                json : {
                    "brand":"GRUBHUB",
                    "client_id":"beta_UmWlpstzQSFmocLy3h1UieYcVST",
                    "device_id":591858824,
                    "email": username,
                    "password": password
                }
            },
            (err, resp, body) => {
                if(err){
                    return reject(err);
                }
                // console.log('body', body);
                this.token = body.session_handle.access_token;
                this.user_id = body.credential.ud_id;
                resolve(body);
            });
        });
    }

    getOrders(){
        return new Promise((resolve, reject) => {
                this.request({
                    method : 'GET',
                    url : 'https://api-gtm.grubhub.com/diners/e6ac03ac-487f-11e4-9697-9cb654858910/order-history?pageNum=1&pageSize=20&sorts=default',
                    json : true,
                    headers : {
                        Authorization : 'Bearer ' + this.token
                    }
                },
                (err, resp, body) => {
                    if(err){
                        return reject(err);
                    }
                    // console.log('body', body);
                    resolve(body.search_result.results);
                });
    });
    }

    getOrderLineItems(index){
        return this.getOrders().then((orders)=>{
            let order = orders[index];

            // console.log('order', order);
            return {
                lineItems : order.charges.lines.line_items.map((lineItem)=>{
                    return {
                        name : lineItem.name,
                        price : lineItem.diner_total,//includes options
                        for : lineItem.special_instructions
                    }
                }),
                fees : order.charges.fees,
                taxes : order.charges.taxes,
                tip : order.charges.tip
            }
        });
    }

}

module.exports = GrubHub;