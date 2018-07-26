import {GraphQLNonNull,GraphQLID} from 'graphql';
import Photo from '../../../models/photos';
import {PhotoType} from '../../types/photos';

const querySinglePhoto = {

    type:PhotoType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const photos = Photo.findById(params.id).exec();
        return photos;
    }

}
export default querySinglePhoto;