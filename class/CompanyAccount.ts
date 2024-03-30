import { Account } from "./DioAccount";

export class CompanyAccount extends Account{ 
    constructor(name:string,accountNumber:number) {
        super(name,accountNumber)
    }
    getLoan = (loanAmount: number): void => {
        if(this.validadeStatus() && loanAmount > 0) {
            this.balance =+ loanAmount;
            console.log(`Empréstimo de ${loanAmount} realizado com sucesso!`);
        }else {
            console.log('A conta não está ativa. Não é possível fazer empréstimo.');
        }
        
    }
    deposit = (value: number):number => {
        if(this.verifyDeposit(value)){
            console.log(`Depósito de ${value} realizado com sucesso!, seu saldo atual é ${this.balance}`);
        }
        return 2
    };
 
}