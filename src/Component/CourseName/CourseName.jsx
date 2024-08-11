
 
const CourseName = ({courseName}) => {
        // console.log(courseName)
        const {title,carded} = courseName;
    return (
        <div>
            <div className="">
                <li type="1" className="p-5 m-4  font-bold bg-slate-200 rounded-lg">{title}</li>
            </div>           
        </div>
    );
};

export default CourseName;