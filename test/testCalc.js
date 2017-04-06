/**
 * Created by daniel.irwin on 4/5/17.
 */

describe('calc test', function(){


    it('calc', function(){
       let order = {
            "lineItems": [
            {
                "name": "Buffer Zone",
                "price": 795,
                "for": "For Dan"
            },
            {
                "name": "Buffer Zone",
                "price": 795,
                "for": "For Jarrod"
            },
            {
                "name": "Buffer Zone",
                "price": 795,
                "for": "For Shaun"
            }
        ],
            "fees": {
            "total": 200,
                "delivery": 200
        },
            "taxes": {
            "total": 207,
                "sales": 191,
                "delivery": 16
        },
            "tip": {
            "type": "INCLUDE_IN_BILL",
                "amount": 698
        }
        };

       let Calc = require('../calc');
       let calculate = new Calc();

       console.log('calc results\n', JSON.stringify(calculate.calc(order, ['shaun', 'jarrod', 'dan']), null, 3));

    });

});