import Course from "./Course.jsx";

function CourseList({ courses, removeCourse }) {
    console.log(courses)
    return (
        <div className="container px-6 m-auto">
            <div className="text-center">
                <h1 className="text-5xl mt-3 mb-8 ">Kurslarım</h1>
            </div>
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                {
                    courses.map((course) => {
                        return <Course key={course.id} {...course} removeOnCourse={removeCourse} />;
                    })
                }
            </div>
        </div>
    );
}

export default CourseList;
