import axios from "axios";

// eslint-disable-next-line react/prop-types
const Card = ({ title, desc, id }) => {
    const deleteTodd = async () => {
        let res = await axios({
            method: "delete",
            url: `http://localhost:3000/${id}`,
        });
        console.log(res);
    };
    return (
        <div
            key={id}
            className="relative flex flex-col justify-around text-center max-w-70 h-70 border-1 border-gray rounded-xl p-4">
            <div className="text-6 font-600">{title}</div>
            <div className="font-300">{desc}</div>
            <div
                className="cursor-pointer absolute right-0 top-0 w-8 h-8 bg-red translate-x-50% -translate-y-50% rounded-full flex items-center justify-center"
                onClick={deleteTodd}>
                X
            </div>
        </div>
    );
};

export default Card;
