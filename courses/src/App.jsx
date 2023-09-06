import './App.css'
import { useEffect, useState } from "react";
import axios from "axios";
import CourseList from "./components/CourseList.jsx";
import Loading from "./components/Loading.jsx";

function App() {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCourses = async () => {
        setLoading(true)
        try {
            const response = await axios.get("http://localhost:3000/courses")
            setCourses(response.data)
            setLoading(false)
        }
        catch (eerror) {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCourses()
    }, [])

    function deleteCourse(id) {
        const afterDeleting = courses.filter((course) => course.id !== id);
        setCourses(afterDeleting);
    }

    return (
        <div>
            {loading ?
                <Loading />
                :
                <>
                    {
                        courses.length === 0 ?
                            <div>any</div> :
                            <div><CourseList courses={courses} removeCourse={deleteCourse} /></div>
                    }
                </>
            }
        </div >
    )
}

export default App
