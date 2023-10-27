import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between h-20 responsive">
            <Link
                className="text-cyan text-7 font-(poppins 600)"
                to="/">
                Todo App
            </Link>
            <div>
                <ul className="flex gap-20 text-5 text-cyan font-(poppins 500)">
                    <li className=" hover:scale-110 duration-400">
                        <Link to="/">Home</Link>
                    </li>
                    <li className=" hover:scale-110 duration-400">
                        <Link to="add-todo">Add</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
