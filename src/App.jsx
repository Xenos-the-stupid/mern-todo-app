import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import AddTodo from "./page/AddTodo";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    index
                    element={<Home />}
                />
                <Route
                    path="/add-todo"
                    element={<AddTodo />}
                />
            </Routes>
        </>
    );
};

export default App;
