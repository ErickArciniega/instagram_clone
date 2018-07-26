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

import {UserType} from './users';
import Users from '../../models/users'

export const PhotoType= new GraphQLObjectType ({

    name:"ListPhotos",
    description:"Fotos de la BD",
    fields: () => ({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        photo:{
            type:GraphQLString
        },
        description:{
            type:GraphQLString
        },
        user:{
            type:UserType,
            resolve(photo){
                const {user} = photo
                return Users.findById(user).exec()
            }
        },
        favoriteCount:{
            type:GraphQLList(GraphQLInt)
        },
        upload_at:{
            type:GraphQLString
        },
        is_active:{
            type:GraphQLBoolean
        }
    })
});

export const PhotoInputType = new GraphQLInputObjectType ({
    //esto lo crea el usuario

name:"addPhoto",
    description:"Agrega, modifica nuevas fotos a la BD",
    fields: () => ({
        
        photo:{
            type:GraphQLString
        },
        description:{
            type:GraphQLString
        }
    })
});