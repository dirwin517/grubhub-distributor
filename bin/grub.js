var client = require('../lib/grubhubclient');

var calculate = require('../lib/calc');

var users = JSON.parse(process.argv[4]);

client.connect(process.argv[2], process.argv[3]).then(()=>{
    client.getOrderLineItems(process.argv[5] || 0 ).then((orderData)=>{
        console.log('data', JSON.stringify(calculate.calc(orderData,users), null, 3));
    });
});

