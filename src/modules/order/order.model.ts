import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function (value:string) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: '{VALUE} is not a valid email address!'
        }
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },

    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity must be at least 1']
    },

    totalPrice: {
        type: Number,
        required: true,
        min: [0, 'Total price must be a positive number']
    }
})

export default mongoose.model('order', OrderSchema);