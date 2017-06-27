/**
 * Created by daniel.irwin on 4/5/17.
 */
'use strict';
let GrubHub = require('./grubhubclient');

let client = new GrubHub();

let Calc = require('./calc');

let calculate = new Calc();

let users = JSON.parse(process.argv[4]);

client.connect(process.argv[2], process.argv[3]).then(()=>{
    client.getOrderLineItems(process.argv[5] || 0 ).then((orderData)=>{
        console.log('data', JSON.stringify(calculate.calc(orderData,users), null, 3));
    });
});

