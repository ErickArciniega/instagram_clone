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
            type:GraphQLList(GraphQLInt)
        },
        followers:{
            type:GraphQLList(GraphQLInt)
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