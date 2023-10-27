import mongoose from "mongoose";

const todoShema = new mongoose.Schema({
    title: String,
    desc: String,
});

const todo = mongoose.model("todo", todoShema);

export default todo;
