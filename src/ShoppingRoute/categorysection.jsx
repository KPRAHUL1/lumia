export default function CategorySection({ categoryName }) {
    const categories = [
      { name: "CABLAN", items: 2 },
      { name: "CANVERS", items: 2 },
      { name: "CLAYTAN", items: 2 },
      { name: "CLORKS", items: 1 },
      { name: "COLE HOON", items: 1 },
      { name: "COLVIN KLEIN", items: 1 },
      { name: "DACOSTE", items: 1 },
      { name: "KOACH", items: 1 },
      { name: "SAUCANY", items: 1 },
      { name: "UNDER ARMOR", items: 1 },
    ];
  
    return (
    <> 
    <div className="xl:px-32 px-10 py-20 bg-gray-50">
    <div className=" rounded-xl bg-white shadow text-center p-3">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold mb-4 bg-white">{categoryName}</h2>
  
        {/* Description */}
        <p className="text-gray-600 mb-6 bg-white">
          The latest Women fashion collections for Spring/Summer and Fall/Winter
          are now available to buy! Our online store presents a wide selection of
          fashionable apparel specifically designed to make you look your best.
        </p>
  
        {/* Category List */}
        <div className="flex flex-wrap justify-center gap-6 bg-white">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Logo Placeholder */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-md">
                <span className="text-lg font-bold text-blue-600">{category.name}</span>
              </div>
  
              {/* Item Count */}
              <p className="text-gray-500 text-sm mt-2">{category.items} item{category.items > 1 ? "s" : ""}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
   
    </>
    
    );
  }
  