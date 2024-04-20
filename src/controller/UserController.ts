import { Request,Response } from "express";
import { UserService } from "../services/UserService";


export class UserController {
    userService: UserService;
    constructor(userService = new UserService()){
        this.userService = userService;
    }
    createUser =  (request: Request, response: Response) => {
      
            const user = request.body;
            if(!user.name) {// ! nulo | !!nulo && indefinido
                return response.status(400).json({ message:'Bad Request: Name obrigatório' });
            }
            if(!user.email) {// ! nulo | !!nulo && indefinido
                return response.status(400).json({ message:'Bad Request: Email obrigatório' });
            }
            this.userService.createUser(user.name,user.email);
            return response.status(201).json({message:'Usuário criado'});
        
    }
    getAllUsers =  (request: Request, response: Response) => {
           
            const users = this.userService.getAllUsers();
            return response.status(200).json(users);
    }

    deleteUser = (request: Request, response: Response) => {
        const {name, email} = request.body;
        if(!name || !email) {
            return response.status(400).json({ message:'Bad Request: Name ou Email obrigatório' });
        }
        try {
            this.userService.deleteUser(name,email);
            return response.status(200).json({message:'Usuário deletado com sucesso!'});
        } catch(error) {
            return response.status(500).json({ message: 'Erro ao remover usuário'});
        }
     }
}