import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

// models
import todo from "./models/todo.js";

const app = express();

mongoose.connect(process.env.MONGODB_URI).then(() =>
    app.listen(3000, () => {
        console.log("connected to port 3000");
    })
);

//  middleware
app.use(cors());
app.use(express.json());

//routes

app.get("/", async (req, res) => {
    const data = await todo.find();
    return res.send(data);
});

app.post("/", async (req, res) => {
    const { title, desc } = req.body;
    const newTodo = await todo.create({ title, desc });
    return res.status(201).json(newTodo);
});

app.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await todo.findByIdAndDelete(id);
    return res.status(200).json({ title: "deleted" });
});
