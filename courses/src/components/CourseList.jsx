import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

function CourseList({ courses }) {

    const [index, setindex] = useState(0);
    const { title, content, price } = courses[index]


    console.log(courses)
    return (
        <div className="container px-6 m-auto">
            <div className="text-center">
                <h1 className="text-5xl mt-3 mb-5 ">Kurslarım</h1>
            </div>
            <div className="flex justify-center items-center ">
                <button className="mr-5  bg-amber-200 p-3 rounded hover:bg-amber-300" ><FaChevronLeft /></button>
                <div className="m-4">
                    <div className="">
                        <div className="m-2 p-6 w-80 border border-amber-50 shadow-md">
                            <h1 className="my-1 text-2xl">{title}</h1>
                            <p className="opacity-75">{content}</p>
                            <br />
                            <p className="text-xl ps-4 py-1 rounded bg-amber-200">{price}</p>
                        </div>
                    </div>
                </div>
                <button className="ml-5 bg-amber-200 p-3 rounded hover:bg-amber-300"><FaChevronRight /></button>
            </div>

        </div>
    );
}

export default CourseList;
