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
            type:new GraphQLList(UserType),
            resolve(user){
                const {following} = user
                return Users.find({'_id':{$in:following}}).exec()
            }
        },
        followers:{
            type:new GraphQLList(UserType),
            resolve(user){
                const {followers} = user
                return Users.find({'_id':{$in:followers}}).exec()
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
    }),

    
});

export const FollowingType = new GraphQLInputObjectType({
    name:"addFollowing",
    description:"Agrega un usuario a la lista de Following",
    fields:() =>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        }
    })

});

export const FollowersType = new GraphQLInputObjectType({
    name:"addFollowers",
    description:"Agrega un usuario a la lista de Followers",
    fields:() =>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        }
    })

});

