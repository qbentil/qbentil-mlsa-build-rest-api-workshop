import mongoose, { Schema, models } from "mongoose";

const TODOSCHEMA = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
}, { timestamps: true })

export default models.TODOSCHEMA || mongoose.model("TODOSCHEMA", TODOSCHEMA)