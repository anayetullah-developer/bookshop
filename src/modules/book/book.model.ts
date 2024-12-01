import mongoose, { Schema } from "mongoose";
import { Category, IBook } from "./book.interface";

const BookSchema = new Schema<IBook>({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(), 
      },

    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    author : {
        type: String,
        required: [true, 'Author is required'],
        trim: true
    },

    price :  {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number'],
    },

    category : {
        type : String,
        required: [true, 'Category is required'],
        enum: Object.values(Category), 
        message: '{VALUE} is not a valid category',
    },

    description : {
        type: String,
        trim: true,
    },

    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [0, 'Quantity must be a non-negative number'],
    },


    inStock : {
        type: Boolean,
        required: true,
        default: true
    }
}, 
{
    timestamps: true, 
}
)


export default mongoose.model<IBook>('book', BookSchema)

