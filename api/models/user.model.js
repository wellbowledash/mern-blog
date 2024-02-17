
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required: true,
        unique: true,
    },
    email: {
        type : String,
        required: true,
        unique: true,
    },
    password: {
        type : String,
        required: true,
    },
    profilePicture:{
        type: String,
        default: 'https://t4.ftcdn.net/jpg/05/62/99/31/240_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg'
    }

},
{timestamps: true}
)
const User = mongoose.model('User', userSchema)
export default User