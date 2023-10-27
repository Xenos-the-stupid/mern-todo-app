import axios from "axios";
import { useState } from "react";

const AddTodo = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        axios({
            url: "http://localhost:3000/",
            method: "post",
            data: {
                title,
                desc,
            },
        });
        setDesc("");
        setTitle("");
    };
    return (
        <div className="responsive text-white my-6">
            <h1 className="text-center my-5 text-15">Add New Todo</h1>
            <form
                onSubmit={addTodo}
                className="flex flex-col gap-15 items-center justify-center">
                <label>
                    <input
                        type="text"
                        placeholder="enter a title for todo"
                        className="bg-transparent px-20 text-center py-2 border-1 border-gray rounded-full"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <textarea
                        cols="60"
                        rows="5"
                        className="bg-transparent border-gray border-1 rounded-xl p-4"
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                    />
                </label>
                <button className="border-1 border-gray px-8 py-3 rounded-full">Submit</button>
            </form>
        </div>
    );
};

export default AddTodo;
