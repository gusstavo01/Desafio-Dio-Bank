export abstract class Account { //classe abstrata é uma classe que não pode ser instanciada por si só, mas pode conter métodos abstratos, ou seja, métodos que são declarados sem uma implementação específica. 
    private name: string
    private  readonly accountNumber:number
    protected balance: number = 100
    private status: boolean = true

    constructor(name:string, accountNumber:number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    setName = (name:string):void => {
        this.name = name;
        console.log(`Nome alterado com sucesso!`);
    }
    getName = ():string => {
        return this.name;
    };
    
    deposit = (value: number): void => {
        if (this.verifyDeposit(value)) {
            this.balance += value;
            console.log(`Depósito de ${value} realizado com sucesso!, seu saldo atual é ${this.balance}`);
        }
    };




    withdraw = (value:number):void => {
        if(this.verifyWithdraw(value)) {
            this.balance -= value;
            console.log(`Saque de ${value} realizado com sucesso!, seu saldo atual é ${this.balance}`);
        }
         
    }
    getBalance = ():void => {
        console.log(this.balance);
    }
    protected validadeStatus = ():boolean => {
        if(this.status){
            return this.status
        }
        throw new Error('Conta inválida')
    }
    verifyDeposit = (value: number): boolean => {
        if (this.validadeStatus() && value > 0) {
            return true;
        }
        throw new Error('Valor do depósito inválido ou conta inválida');
    };
    verifyWithdraw = (value: number): boolean => {
        if (this.validadeStatus() && value > 0 && value <= this.balance) {
            return true;
        }
        throw new Error('Valor do saque inválido ou conta inválida');
    }
}
