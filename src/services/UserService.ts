export interface User {
    name: string;
    email: string;
}

const db = [ 
    {
        name: 'Gustavo',
        email:'gustavo@gmail.com'
    }
]
export class UserService {
    db: User[] 
    constructor(database = db) {
        this.db = database;
    }

    createUser =  (name:string, email:string) => {
        const user = {
            name,
            email
        }
       this.db.push(user);
       console.log('DB atualizado',this.db);
    }
    getAllUsers = () => {
        return this.db;
    }
    deleteUser = (name:string, email:string) => {
        const index = this.db.findIndex(user => user.name === name && user.email === email);
        if (index !== -1) {
            this.db.splice(index, 1);
            console.log(`Usuário ${name} (${email}) removido.`);
        } else {
            console.log(`Usuário ${name} (${email}) não encontrado.`);
        }
        
    }
}