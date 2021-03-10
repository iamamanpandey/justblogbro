import mongoose from "mongoose";
const {  Schema } = mongoose;

const postSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Authors'
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Categories"
    },
    status: {
        type: Boolean,
    },
}, {
    timestamps: true
});

export default mongoose.model('Posts', postSchema);