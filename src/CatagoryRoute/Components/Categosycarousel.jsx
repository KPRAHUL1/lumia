
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CategoryCarousel() {
    const categories = [
        {
            image: "/Categoryimage/categorya.webp",
            title: "Arm Warmers & Sleeves"
        },
        {
            image: "/Categoryimage/categoryb.png",
            title: "Arm Warmers & Sleeves"
        },
        {
            image: "/Categoryimage/categoryc.webp",
            title: "Arm Warmers & Sleeves"
        },
        {
            image: "/Categoryimage/categoryd.webp",
            title: "Arm Warmers & Sleeves"
        },
        {
            image: "/Categoryimage/categorye.webp",
            title: "Arm Warmers & Sleeves"
        },
        {
            image: "/Categoryimage/categoryf.webp",
            title: "Arm Warmers & Sleeves"
        },
        {
            image: "/Categoryimage/categoryg.webp",
            title: "Arm Warmers & Sleeves"
        },
        {
            image: "/Categoryimage/categoryh.webp",
            title: "Arm Warmers & Sleeves"
        },
        {
            image: "/Categoryimage/categoryi.webp",
            title: "Arm Warmers & Sleeves"
        },
        {
            image: "/Categoryimage/categoryj.webp",
            title: "Arm Warmers & Sleeves"
        }
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["mobile"]}
            className="z-30 "
            infinite
            autoPlay
            autoPlaySpeed={3000}
        >
            {categories.map((item, index) => (
                <div key={index} className="grid grid-cols-1 m-2 justify-items-center lg:m-0">
                    <img
                        src={item.image}
                        alt={item.title || "Category Image"}
                        className="w-48 rounded-full"
                    />
                    <p className="text-center">{item.title}</p>
                </div>
            ))}
        </Carousel>
    );
}
