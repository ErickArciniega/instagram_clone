import User from '../models/users';
import jwt from 'jsonwebtoken';

const expiresIn = "3d"; //esto deberían ser variables de entorno
const secret = "samplejwtnetflix"; //esto deberían ser variables de entorno
const tokenPrefix = "JWT"; //esto deberían ser variables de entorno


export const verifyToken = (token) => {

    try{
        const [prefix,recivedToken] = token.split(' ');
        let user = null;
        if(!recivedToken){
            throw new Error('No token provider');
        }

        if(prefix != tokenPrefix){
            throw new Error('Invalid header format');
        }

        jwt.verify(recivedToken,secret,(err,payload) => {
            if(err) {throw new Error("Invalid Token")}
            else{
                user = User.findById(payload.id).exec()
            }
        })

        if(!user) {throw new Error("User doesn't exist")}
        
        return user;

    }catch(err){
        throw Error("Erro not expected");
    }

}