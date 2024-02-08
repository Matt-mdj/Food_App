const { model,models,Schema } = require("mongoose");
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
    email:{type:String, required: true, unique: true},
    password: {type: String},
}, {timestamps: true});

UserSchema.post('validate', function(user){
    const nonHashedPassword = user.password;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(nonHashedPassword, salt);
    
})

export const User = models?.User || model('User', UserSchema);