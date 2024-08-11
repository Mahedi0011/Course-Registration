import { useState } from "react";
import CourseName from "../CourseName/CourseName";




const CourseNames = ({ courseNames, totalCarded, prices, reducedCarded }) => {

    return (
        <div>
            <div className="text-center">
                <h2 className="font-bold bg-slate-300 p-3 m-2 rounded-sm">
                    Course Name Remaining {reducedCarded >= 0 ? reducedCarded : alert('20 hrs remaining is full') | {totalCarded} } hrs </h2>
            </div>
            <ol>
                {
                    courseNames.map(courseName =>
                        <CourseName key={courseName.idx}
                            courseName={courseName}>
                        </CourseName>)
                }
            </ol>
            <div>
                <h4 className="p-4 m-2 bg-red-300 font-semibold rounded-lg">Total Carded Hours : 
                    {totalCarded <= 20 ? totalCarded : "20" } hrs</h4>
            </div>
            <div>
                <h4 className="p-4 m-2 bg-red-300 font-semibold rounded-lg">Total Price : {prices.toFixed(2)} $ USD</h4>
            </div>
        </div>
    );
};

export default CourseNames;