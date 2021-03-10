import mongoose from "mongoose";
const { Schema } = mongoose;

const authorSchema = new Schema({
 name: {
    type: String,
    required: true 
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
 
},{timestamps: true});


export default mongoose.model('Authors', authorSchema);
