import mongoose, { Schema } from "mongoose";

const BookSchema = new Schema({

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
        enum: {
            values : ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
            message: '{VALUE} is not a valid category'
        }
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
})


BookSchema.pre('save', function (next) {
    this.inStock = this.quantity > 0;
    next();
})

export default mongoose.model('book', BookSchema)

