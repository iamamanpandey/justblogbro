import { model, Schema} from 'mongoose';


const postSchema = new Schema({
    
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
     photo: {
        type: String,
        trim: true
    },
},{timestamps:true
})

export default model('Posts', postSchema);