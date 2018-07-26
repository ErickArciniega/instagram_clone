import {GraphQLNonNull,GraphQLID,GraphQLList} from 'graphql';

import User from '../../../models/users';
import {UserType} from '../../types/users';

import Photo from '../../../models/photos';
import {PhotoType} from '../../types/photos';

const queryUserPhotos = {

    type:UserType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        },
    },
    type:new GraphQLList(PhotoType),
    
    resolve(root,params){
        //const user = User.findById(params.id).exec();
        
        const photos = Photo.find({"user": params.id}).sort({ upload_at: -1 }).exec();
        return photos;
    }

}
export default queryUserPhotos;