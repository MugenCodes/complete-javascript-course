const tipCalc = bill => {
    for (let i = 0; i < bill.length; i++){
    if (bill[i] < 50) {
        tips.push(bill[i] * 0.2);
    } else if (bill[i] >= 50 && bill[i] <= 200) {
        tips.push(bill[i] * 0.15);
    } else if (bill[i] > 200) {
        tips.push(bill[i] * 0.1);
    }
}
}

const finalBills = () => {
    for (let i = 0; i < bills.length; i++){
        total.push(bills[i] + tips[i])
    }
}

const bills = [124, 48, 268];
let tips = []
let total = []
tipCalc(bills)

console.log(bills)
console.log(tips)
console.log(total)
finalBills();
console.log(total)