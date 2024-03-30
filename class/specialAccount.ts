import { Account } from "./DioAccount";
export class SpecialAccount extends Account {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }
    deposit = (value:number) => {
        this.balance = value + 10;
        console.log(`Deposito de ${value} realizado com sucesso, você teve um bonus de 10. Seu saldo atual é ${this.balance}`);
    };

}