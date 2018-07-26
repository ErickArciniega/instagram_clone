import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PhotosSchema = new Schema ({

    "photo":{
        type:String,
        required:true
    },
    "description":{
        type:String,
    },
    "user":{
        type:Schema.Types.ObjectId,
        ref:'Users',
        required:true
    },
    "favoriteCount":{
        type:[Number],
        default:0
    },
    "is_active":{
		type:Boolean,
		default:true
	},
    "upload_at":{
		type:Date,
		default: new Date()
	}

},{ collection:"Photos", timestamps:true});

export default mongoose.model('Photos',PhotosSchema);