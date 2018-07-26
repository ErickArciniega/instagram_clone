import {GraphQLNonNull} from 'graphql';

import Photos from '../../../models/photos';
import {PhotoType,PhotoInputType} from '../../types/photos';

export default{
    type:PhotoType,
    args:{
        data:{
            type:new GraphQLNonNull(PhotoInputType)
        }
    },
    resolve(root,params){
        const  photos = new Photos(params.data);
        const newPhoto = photos.save();
        if(!newPhoto) throw new Error("Error al crear foto");
        return newPhoto;
    }
}