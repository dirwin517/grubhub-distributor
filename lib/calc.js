/**
 * Created by daniel.irwin on 4/5/17.
 */

'use strict';
class Calc {

    turnToDollars(value){

        let DOLLAR_DIVISOR = 100;

        return Math.ceil(value) / DOLLAR_DIVISOR;
    }

    calc(order, names){


        let total = order.lineItems.reduce((acc, el) => acc += (el.price), 0);

        let feesTotal = order.fees.total;
        let taxesTotal = order.taxes.total;
        let tipTotal = order.tip.amount;

        return names.map( (name) => {

            let userFoodTotal = order.lineItems.reduce((acc, el) => acc += (el.for.toLowerCase().indexOf(name.toLowerCase()) !== -1)?el.price:0, 0.0);

            let userPercentage = (userFoodTotal/total);

            let userFees = (feesTotal * userPercentage);
            let userTaxes = (taxesTotal * userPercentage);
            let userTip = (tipTotal * userPercentage);

            let userTotal = userFees + userTaxes + userTip + userFoodTotal;

            return {
                person : name,
                total : this.turnToDollars(userTotal),
                food : this.turnToDollars(userFoodTotal),
                fees: this.turnToDollars(userFees),
                taxes : this.turnToDollars(userTaxes),
                tip : this.turnToDollars(userTip),
                percent : userPercentage
            };

        });
    }

}

module.exports = new Calc();