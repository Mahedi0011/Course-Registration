
import { useState } from "react";
import { useEffect } from "react";
import Course from "../Course/Course";



const Courses = ({ handleClick }) => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="grid sm:grid-cols-1 m-1 p-1 md:grid-cols-3 gap-2">
            {
                courses.map(course =>
                    <Course key={course.id}
                        course={course}
                        handleClick={handleClick}>
                    </Course>)
            }
        </div>
    );
};

export default Courses;