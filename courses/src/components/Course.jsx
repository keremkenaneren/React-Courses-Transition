function Course({id, title, content, price, removeOnCourse}) {

    return (
        <div className="col-span-4 lg:col-span-3">
            <div className="m-5 p-6 w-80 border border-amber-50 shadow-md">
                <h1 className=" my-1 text-2xl">{title}</h1>
                <p className="opacity-75">{content}</p>
                <br/>
                <p className="text-xl ps-4 py-1 rounded bg-amber-200">{price}</p>
                {/* eslint-disable-next-line no-undef */}
                <button onClick={()=> removeOnCourse(id)} className="bg-amber-400 rounded my-3 p-1 w-32 hover:bg-yellow-600">Sil</button>
            </div>
        </div>
    );
}

export default Course ;




