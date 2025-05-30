export default function ImagesStyle() {
    return (
      <div className="grid grid-cols-1 gap-5 m-5 md:grid-cols-2 xl:grid-cols-2 xl:gap-6 xl:py-10 xl:px-28 xl:ml-28 xl:mr-28">
        {/* Image 1 */}
        <div className="overflow-hidden rounded-2xl">
          <img 
            src="look (4).png" 
            alt="Description of look 4" 
            className="w-full h-auto rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110" 
          />
        </div>
  
        {/* Image 2 */}
        <div className="overflow-hidden rounded-2xl">
          <img 
            src="look (3).png" 
            alt="Description of look 3" 
            className="w-full h-auto rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110" 
          />
        </div>
  
        {/* Image 3 */}
        <div className="overflow-hidden rounded-2xl">
          <img 
            src="look (2).png" 
            alt="Description of look 2" 
            className="w-full h-auto rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110" 
          />
        </div>
  
        {/* Image 4 */}
        <div className="overflow-hidden rounded-2xl">
          <img 
            src="look (1).png" 
            alt="Description of look 1" 
            className="w-full h-auto rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110" 
          />
        </div>
      </div>
    );
  }
  