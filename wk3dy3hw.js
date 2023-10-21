class Governor {
    static name = 'Arnold'
    static noOfofficialVehicles = 3
    static haveOffialResidence = true

    static signGovMemos() {
        console.log('Memo signed')
    }

    static allocateFunds() {
        console.log('Funds Allocated')
    }

    static meetWithOfficials() {
        console.log('Had a meeting')
    }
}


// console.log(Governor.haveOffialResidence)
// Governor.meetWithOfficials()

class Person {
    constructor(name, height, weight) {
        this.name = name
        this.height = height
        this.weight = weight
    }
    eat(person) {
        console.log(`${person} is eating chop chop`)
    }
    walk(person) {
        console.log(`${person}\'s legs moving`)
    }
    talk(person) {
        console.log(`${person} is speaking Bla bla`)
    }
}

class PostalWorker extends Person {

    deliverPost(person) {
        console.log(`${person} delivered the post`)
    }
    sellStamps(person) {
        console.log(`${person} sold the stamp`)
    }
}

class Chef extends Person {

    cutVeggies(person) {
        console.log(`${person} chopped veggies`)
    }
    prepareRecipe(person) {
        console.log(`${person} prepared recipie`)
    }
}

const postalworker1 = new PostalWorker('Ben', '5 feet', '60Kg')
// console.log(postalworker1)
// postalworker1.eat('postal worker1')
// postalworker1.walk('postal worker1')
// postalworker1.talk('postal worker1')
// postalworker1.deliverPost('postal worker1')
// postalworker1.sellStamps('postal worker1')

const postalworker2 = new PostalWorker('Joe', '6 feet', '80Kg')
// console.log(postalworker1)
// postalworker2.eat('postal worker2')
// postalworker2.walk('postal worker2')
// postalworker2.talk('postal worker2')
// postalworker2.deliverPost('postal worker2')
// postalworker2.sellStamps('postal worker2')


const chef1 = new Chef('Harold', '4.5 feet', '65Kg')
// console.log(chef1)
// chef1.eat('Chef 1')
// chef1.walk('Chef 1')
// chef1.talk('Chef 1')
// chef1.cutVeggies('Chef 1')
// chef1.prepareRecipe('Chef 1')


const chef2 = new Chef('Leo', '6.5 feet', '70Kg')
// console.log(chef2)
// chef2.eat('Chef 2')
// chef2.walk('Chef 2')
// chef2.talk('Chef 2')
// chef2.cutVeggies('Chef 2')
// chef2.prepareRecipe('Chef 2')


// HUNGRY FOR MORE

class BankAccount {
    constructor(ownerName, balance) {
        if (typeof ownerName === 'string' && typeof balance === 'number') {
            this.ownerName = ownerName
            this.balance = balance
            this.acctNum = Math.floor(Math.random() * 1000000)
        }
        else { console.log('Pls enter appropriate values') }
    }

    deposit(amount) {
        if (typeof amount !== 'number') return console.log('Pls enter appropriate values')
        let newBalance = this.balance + amount
        console.log(`$${amount} is deposited to your account and your newBalance is ${newBalance}!.`)
    }

    withdraw(amount) {
        if (typeof amount !== 'number') return console.log('Pls enter appropriate values')
        let newBalance = this.balance - amount
        console.log(`$${amount} is withdrawn from your acc your new balance is ${newBalance}!.`)
    }
}

class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, overdraftEnabled = false) {
        super(ownerName, balance)
        this.overdraftEnabled = overdraftEnabled
    }

    withdraw(amount) {
        if (!this.overdraftEnabled && amount > this.balance) {
            return console.log('Over draft facility is not enabled to your account')
        }
        let newBalance = this.balance - amount
        console.log(newBalance)
    }
}

class SavingsAccount extends BankAccount {
    constructor(ownerName, balance) {
        super(ownerName, balance)
    }

    withdraw(amount) {
        if (typeof amount !== 'number') return console.log('Pls enter appropriate values')
        if (amount > this.balance) return console.log("Insufficient balance")
        let newBalance = this.balance - amount
        console.log(newBalance)
    }
}

// b1 = new SavingsAccount('ragu', 1000)
// console.log(b1)
// b1.deposit(100)
// b1.withdraw(5000)

