const john = {
    firstName: 'John',
    lastname: 'Smith',
    mass: 80,
    height: 1.8,
    bmi: function() {
        this.bmi = Math.floor(this.mass  / (this.height * this.height))
    }
}
const mark = {
    firstName: 'Mark',
    lastname: 'Duncan',
    mass: 90,
    height: 2,
    bmi: function() {
        this.bmi = Math.floor(this.mass  / (this.height * this.height))
    }
}

john.bmi()
mark.bmi()



console.log(john)
console.log(mark)

if(mark.bmi === john.bmi) {
    console.log(`Both BMIs are the same`)
} else if (mark.bmi > john.bmi) {
    console.log(`Mark has a heigher bmi at ${mark.bmi}. Johns BMI is ${john.bmi}`)
} else {
    console.log(`John has a heigher bmi at ${john.bmi}. Marks BMI is ${mark.bmi}`)
}