import {GraphQLNonNull,GraphQLID,GraphQLList} from 'graphql';

import User from '../../../models/users';
import {UserType, FollowingType} from '../../types/users';

import Photo from '../../../models/photos';
import {PhotoType} from '../../types/photos';

const queryNewsFeed= {

    type:UserType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        },
        following:{
            
        }
    },
    type:new GraphQLList(FollowingType),
    type:new GraphQLList(PhotoType),

    resolve(root,params){
        //const user = User.findById(params.id).exec();
        const newphotos = Photo.find({"user": params.id}).sort({ upload_at: -1 }).exec();
        return newphotos;
    }

}
export default queryNewsFeed;