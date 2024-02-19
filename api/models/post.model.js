import mongoose from "mongoose"
const postSchema = new mongoose.Schema({
    
        userId: {
            type: String,
            required: true,
        },
        title:{
            type: String,
            required: true,
            unique: true,
        },
        content: {
            type: String,
            required: true,
        },
       
        image: {
            type: String,
            default: "https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg?w=740&t=st=1708352885~exp=1708353485~hmac=c212f4fa4fccfbcd0f66a58efc544478bd43386cd6233d47b64c7737adcb8270",


        },
        category: {
            type: String,
            default: 'Uncategorized',
        },
        slug : {
            type: String,
            required: true,
            unique: true,
        },

    
}, {timestamps: true}
)
const Post = mongoose.model('Post', postSchema)
export default Post