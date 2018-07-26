import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema ({

    "name":{
        type:String,
        required:true
    },
    "lastname":{
        type:String,
        required:true
    },
    "username":{
        type:String,
        required:true,
        unique:true
    },
    "email":{
		type:String,
		required:true,
		unique:true
	},
    "password":{
        type:String,
        required:true
    },
    "website":{
        type:String
    },
    "biography":{
        type:String
    },
    "sex":{
        type:String,
        required:true
    },
    "photo":{
        type:String
    },
    "following":{
        type: [Schema.Types.ObjectId],
        ref: "Users"
    },
    "followers":[{
        type: Schema.Types.ObjectId,
        ref: "Users"
    }],
    "create_at":{
        type:Date,
        default:new Date()
    },
    "is_active":{
        type:Boolean,
        default:true
    }

}, { collection:"Users", timestamps:true});

//hasheo
UserSchema.pre('save', function(next){
    let user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
        if (err) return next(err);
        
        bcrypt.hash(user.password,salt,function(err,hash){
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

//comparacion de hashes
UserSchema.methods.comparePassword = function(candidatePassword,cb){
    bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
        cb(null,isMatch)
    });
}

export default mongoose.model('Users', UserSchema);