import React from "react";

import useCourseStore from "../app/courseStore";

const CourseList = () => {
    const courses = useCourseStore((state) => state.courses);
    const removeCourse = useCourseStore((state) => state.removeCourse);
    const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus);

    return (
        <>
            <ul>
                {courses.map((course) => {
                    return (
                        <React.Fragment key={course.id}>
                            <li
                                className={'course-item'}
                                style={{
                                    textDecoration: course.completed ? "line-through" : "none",
                                    backgroundColor: course.completed ? "#00FF0044" : "#2e2e2e"
                                }}
                            >
                                <span className="course-item-col-1">
                                    <input
                                        type="checkbox"
                                        checked={course.completed}
                                        onChange={() => {
                                            toggleCourseStatus(course.id)
                                        }}
                                    />
                                </span>
                                <span>{course?.title}</span>
                                <button
                                    onClick={() => {
                                        removeCourse(course.id)
                                    }}
                                    className="delete-btn">Delete</button>
                            </li>
                        </React.Fragment>
                    )
                })}
            </ul>
        </>
    );
}

export default CourseList