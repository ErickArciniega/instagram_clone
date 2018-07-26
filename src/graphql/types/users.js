import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLList
} from 'graphql';

import Users from '../../models/users'

export const UserType= new GraphQLObjectType ({

    name:"ListUsers",
    description:"Usuarios de la BD",
    fields: () => ({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        lastname:{
            type:GraphQLString
        },
        username:{
            type:GraphQLString
        },
        email:{
            type:GraphQLString
        },
        website:{
            type:GraphQLString
        },
        biography:{
            type:GraphQLString
        },
        sex:{
            type:GraphQLString
        },
        photo:{
            type:GraphQLString
        },
        following:{
            type:UserType,
            resolve(_id){
                const {following} = _id
                return Users.findById(following).exec()
            }
        },
        followers:{
            type:UserType,
            resolve(_id){
                const {followers} = _id
                return Users.findById(followers).exec()
            }
        },
        create_at:{
            type:GraphQLString
        },
        is_active:{
            type:GraphQLBoolean
        }
    })
});

export const UserInputType = new GraphQLInputObjectType ({
    //esto lo crea el usuario

name:"addUsers",
    description:"Agrega, modifica nuevos usuarios a la BD",
    fields: () => ({
        
        name:{
            type:GraphQLString
        },
        lastname:{
            type:GraphQLString
        },
        username:{
            type:GraphQLString
        },
        email:{
            type:GraphQLString
        },
        website:{
            type:GraphQLString
        },
        biography:{
            type:GraphQLString
        },
        sex:{
            type:GraphQLString
        },
        photo:{
            type:GraphQLString
        },
        password:{
            type:GraphQLString
        }
    })
});