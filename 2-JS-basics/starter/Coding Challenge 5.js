const john = {
    fullname: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    tips: [],
    total: [],
    avgTip: [],
    calcTips: function() {
        for (let i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 50) {
                this.tips.push(this.bills[i] * 0.2);
            } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                this.tips.push(this.bills[i] * 0.15);
            } else if (this.bills[i] > 200) {
                this.tips.push(this.bills[i] * 0.1);
            }
    }   for (let j = 0; j < this.bills.length; j++){
        this.total.push(this.bills[j] + this.tips[j])
    }
}
}

const mark = {
    fullname: 'Mark Duncan',
    bills: [77, 375, 110, 45],
    tips: [],
    total: [],

    calcTips: function() {
        for (let i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 100) {
                this.tips.push(this.bills[i] * 0.2);
            } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
                this.tips.push(this.bills[i] * 0.1);
            } else if (this.bills[i] > 300) {
                this.tips.push(this.bills[i] * 0.25);
            }
    }   for (let j = 0; j < this.bills.length; j++){
        this.total.push(this.bills[j] + this.tips[j])
    }
}
}

john.calcTips();
mark.calcTips();

const avgTip = tip => {
    let result = 0;
    for(let i = 0; i < tip.length; i++) {
        result += tip[i];
    }
    let avg = result / tip.length;
    return avg
}

if (avgTip(john.tips) === avgTip(mark.tips)) {
    console.log(`Both Johns Average Tip and Marks Average Tip are the Same at ${avgTip(john.tips)}`)
} else if (avgTip(john.tips) > avgTip(mark.tips)) {
    console.log(`John has a higher average at ${avgTip(john.tips)} vs Marks ${avgTip(mark.tips)} `)
} else {
    console.log(`Mark has a higher average at ${avgTip(mark.tips)} vs Johns ${avgTip(john.tips)} `)
}