import {
    GraphQLList
} from 'graphql';

import User from '../../../models/users';
import {UserType} from '../../types/users';

const queryAllUsers = {

    type:new GraphQLList(UserType),
    resolve(){
        const users = User.find().exec()
        if(!users) throw new Error ("Error al traer la BD")
        return users;
    }


}

export default queryAllUsers;