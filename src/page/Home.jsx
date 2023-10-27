import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function f() {
            let res = await axios.get("http://localhost:3000/");
            setData(res);
        }
        f();
    }, []);
    console.log(data);

    return (
        <main className="responsive text-white py-15 font-poppins">
            <div className="flex items-center justify-between text-7 mb-8">
                <div>Todos</div>
                <div>{data?.data?.length}</div>
            </div>
            <div className="grid grid-cols-4 gap-15">
                {data?.data?.map((item) => (
                    <Card
                        id={item._id}
                        title={item.title}
                        key={item._id}
                        desc={item.desc}
                        onClick={() => deleteTodd(this)}
                    />
                ))}
            </div>
        </main>
    );
};

export default Home;
