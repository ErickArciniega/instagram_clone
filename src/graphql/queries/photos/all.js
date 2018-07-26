import {
    GraphQLList
} from 'graphql';

import Photo from '../../../models/photos';
import {PhotoType} from '../../types/photos';

const queryAllPhotos = {

    type:new GraphQLList(PhotoType),
    resolve(){
        const photos = Photo.find().exec()
        if(!photos) throw new Error ("Error al traer la BD")
        return photos;
    }


}

export default queryAllPhotos;