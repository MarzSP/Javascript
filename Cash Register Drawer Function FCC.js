function checkCashRegister(price, cash, cid) {
    var change = cash - price;

    var coinValues = [
        { name: 'ONE HUNDRED', val: 100.00 },
        { name: 'TWENTY', val: 20.00 },
        { name: 'TEN', val: 10.00 },
        { name: 'FIVE', val: 5.00 },
        { name: 'ONE', val: 1.00 },
        { name: 'QUARTER', val: 0.25 },
        { name: 'DIME', val: 0.10 },
        { name: 'NICKEL', val: 0.05 },
        { name: 'PENNY', val: 0.01 }
    ];

    var tmoney = cid.reduce(function (x, y) {
        return x + y[1];
    }, 0.0);

    if (tmoney < change) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    };

    if (tmoney === change) {
        return {status: "CLOSED", change: cid};
    };

    var reversecid = cid.slice().reverse();

    var bills = coinValues.reduce(function (acc, next, index) {
        if (change >= next.val) {
            var coins = 0.0;
            while (change >= next.val && reversecid[index][1] >= next.val) {
                change -= next.val;
                change = change.toFixed(2);
                reversecid[index][1] -= next.val;
                coins += next.val;
            }
            acc.push([next.name, coins]);
            return acc;
        }
        else {
            return acc;
        }
    }, []);

    if (change % tmoney !== 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    };

    return {status: "OPEN", change: bills};
};