
import { IoMdBook } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";

const Course = ({ course,handleClick }) => {
    const { img, cover, title, carded, number, price, details } = course;
    return (
        <div className="m-2 p-2">
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src={cover} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p>{details}</p>
                    <div className="flex">
                   
                    <p className="flex justify-center items-center"> <BsCurrencyDollar />Price {price} $ </p>          
         
                    <p className="flex justify-center items-center"><IoMdBook className="mr-2"></IoMdBook> Carded {carded} hrs</p>
                  
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handleClick(course,carded,price)} className="btn btn-primary w-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;