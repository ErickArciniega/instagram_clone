import express from 'express';
import mongoose from 'mongoose';
import User from './src/models/users';
import cors from 'cors';
import bodyParser from 'body-parser';
import {createToken} from './src/resolvers/create';

import graphQLHTTP from 'express-graphql';
import schema from './src/graphql';

import { verifyToken } from './src/resolvers/verify';

const app = express();
const PORT = process.env.PORT || 3500

mongoose.connect('mongodb://admin:yolo1234@ds229771.mlab.com:29771/insta-dev21');
const db = mongoose.connection;
db.on('error',() => console.log("Error al conectar la BD"))
	.once('open',() => console.log("Conectado a la BD :)"));

app.use(bodyParser.json());


//cors
app.use(cors());	//esto no es seguro checar


//creando nuevo usuario en la DB
app.post('/signup',(req,res) =>{
	let user = req.body
	User.create(user).then((user) =>{
		return res.status(201).json({"message":"Usuario Creado",
			"id":user._id})
	}).catch((err) =>{
		console.log(err);
		return res.json(err);
	})
});

//logeando usuarios
app.post('/login', (req,res) =>{

	const token = createToken(req.body.email,req.body.password).then((token) => {

		res.status(201).json({token});
		
	}).catch(() => {
		res.status(403).json({
			message:"Login Failed!!!! :( Invalid credentials"
		})
	})
})


//midleware SUPER IMPORTANTE DESCOMENTAR BBY
app.use('/graphql',(req,res,next) => {
	const token = req.headers['authorization'];
	try{
		req.user = verifyToken(token)
		next();
	}catch(error){
		res.status(401).json({message:error.message})
	}
})


//GraphQL

app.use('/graphql', graphQLHTTP((req,res) => ({
	schema,
	graphiql:true,
	pretty:true
})))



app.get('/',(req,res) =>{
	res.send("Funcionando :D");
})

app.listen(PORT,() =>{
	console.log("Magic happens in the port:"+PORT);
})