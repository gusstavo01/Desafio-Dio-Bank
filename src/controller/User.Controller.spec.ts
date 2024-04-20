import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { UserService } from "../services/UserService";
import { Request } from "express";
import { UserController } from "./UserController";


describe('UserController', () => {  
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        getAllUsers: jest.fn(),
        deleteUser: jest.fn()
    }
    const userControler = new UserController(mockUserService as UserService);
   

 
    it('Deve adicionar um novo usuário',() => {
        const mockRequest = {
           body: {
            name: 'Gustavo',
            email:'teste@gmail.com'
           }
        }as Request
        const mockResponse = makeMockResponse()
        userControler.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({message:'Usuário criado'})
});
    it('Deve retornar erro quando o nome não é fornecido', () => {
        const mockRequest = {
            body: {
                email: 'teste@gmail.com'
            }
        } as Request;
        const mockResponse = makeMockResponse();
        userControler.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({message:'Bad Request: Name obrigatório'});
    
    })
    it('Deve retornar um erro quando o email não é fornecido',() => {
        const mockRequest = {
            body: {
                name: 'Gustavo'
            }
        } as Request;
        const mockResponse = makeMockResponse();
        userControler.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({message:'Bad Request: Email obrigatório'});
    })
    it('Deve chamar a função getAllUsers', () => {
        const mockRequest = {} as Request;
        const mockResponse = makeMockResponse();
        userControler.getAllUsers(mockRequest, mockResponse);
        expect(mockUserService.getAllUsers).toHaveBeenCalled();
    });

    it('Deve deletar um usuário', () => {
        const mockRequest = {
            body: {
             name: 'Gustavo',
             email:'teste@gmail.com'
            }
         }as Request
        const mockResponse = makeMockResponse();
        userControler.deleteUser(mockRequest, mockResponse);
        expect(mockUserService.deleteUser).toHaveBeenCalledWith('Gustavo', 'teste@gmail.com');

        // Verificar se a resposta correta foi enviada
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toMatchObject({message: 'Usuário deletado com sucesso!'});
    });
    })
