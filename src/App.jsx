

import { useState } from "react"
import CourseNames from "./Component/CourseNames/CourseNames"
import Courses from "./Component/Courses/Courses"

function App() {

  const [courseNames, setCourseNames] = useState([]);
  const [totalCarded, setTotalCarded] = useState(0);
  const [prices, setPrices] = useState(0);
  const [reducedCarded, setReducedCarded] = useState(20)

  const handleClick = (course, carded, price) => {
    const newCourseNames = [...courseNames, course]
    // const uniqueCourse =  newCourseNames.filter(item,index => newCourseNames.indexOf(item) === index) 
    // setCourseNames(newCourseNames);
    const uniqueCourse = newCourseNames.filter((item, index) => newCourseNames.indexOf(item) === index);
    if(uniqueCourse.length){
      setCourseNames(uniqueCourse);
      setTotalCarded(totalCarded + carded);
      setPrices(prices + price);   
      const newHrs = reducedCarded - carded ;
      setReducedCarded(newHrs)

    }   
  }

  return (
    <>
      <h5 className="text-4xl text-center font-bold mb-5 mt-3">Course Registration</h5>
      <div className="sm:block md:flex">
        <div className="w-9/12">
          <Courses handleClick={handleClick}></Courses>
        </div>
        <div>
          <CourseNames
            courseNames={courseNames}
            totalCarded={totalCarded}
            prices={prices}
            reducedCarded={reducedCarded} >
          </CourseNames>
        </div>
      </div>
    </>
  )
}

export default App
