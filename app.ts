import { CompanyAccount } from "./class/CompanyAccount";
import { Account } from "./class/DioAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { SpecialAccount } from "./class/specialAccount";
class Admin extends Account {
    balance:number
    constructor(name: string,accountNumber:number) {
       super(name, accountNumber);
       this.balance = 20;
    }
    getValue = () => {
        console.log(this.balance);
    }
}






const peopleAccount: PeopleAccount = new PeopleAccount(1,'Gustavo',22);
 peopleAccount.deposit(30);
 console.log(peopleAccount);
 peopleAccount.withdraw(30);
 console.log(peopleAccount);
const loan: CompanyAccount = new CompanyAccount('Gustavo',1);
loan.getLoan(40);
console.log(loan);
const specialAccount: SpecialAccount = new SpecialAccount('Gustavo',22);
specialAccount.deposit(100);
console.log(specialAccount);