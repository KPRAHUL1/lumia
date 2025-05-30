import { Link } from "react-router-dom";

export default function CategoryCard(props) {

    const { imagePath, categoryName } = props;

    return (
<>
<div className="grid grid-cols-1 justify-items-center mb-3 hover:text-blue-600"href="">
<div className="overflow-hidden w-auto h-auto rounded-full ">
            <Link to="/Men">
                <img src={imagePath} alt={`images ${categoryName}`} className=" xl:w-40 xl:h-40 md:w-auto md:h-auto rounded-full w-28 h-28 lg:w-40 lg:h-36  transition duration-300 ease-in-out hover:scale-110" />
               
                </Link>  </div>
         <Link to="/Men"> <h4  className=" md:p-4 p-2">{categoryName}</h4></Link>
</div>
    
</>
       

    )
}