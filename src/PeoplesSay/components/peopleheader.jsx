import People_Image from "./peopleimages";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import star from "../../assets/icons/star.png"
export default function People_header() {


    const peoplelist = [
        {
            titles: "Nicole Grant",
            tag: "jacket",
            images: "people1.1.avif",
            images1:"circle1.avif",
            star: star,
            subtitle: "Padded short jacket",
            description: "This jacket is fantastic! I receive praises on the fit, color, and length every time I wear it. On a cold day, it helps me stay warm. I can wear a sweater, even a cardigan, without feeling constrained. "
        },
        {
            titles: "Nicole Grant",
            tag: "jacket",
            images: "people2.2.avif",
            images1:"circle2.avif",
            star: "fa-solid fa-star text-sm",
            subtitle: "Padded short jacket",
            description: "This jacket is fantastic! I receive praises on the fit, color, and length every time I wear it. On a cold day it helps me stay warm. I can wear a sweater, even a cardigan, without feeling constrained."
        },
        {
            titles: "Nicole Grant",
            tag: "jacket",
            images: "people1.3.avif",
            images1:"circle3.avif",
            star: "fa-solid fa-star text-sm",
            subtitle: "Padded short jacket",
            description: "This jacket is fantastic! I receive praises on the fit, color, and length every time I wear it. On a cold day, it helps me stay warm. I can wear a sweater, even a cardigan, without feeling constrained. "
        },
        {
            titles: "Nicole Grant",
            tag: "jacket",
            images: "people1.4.avif",
            images1:"circle4.avif",
            star: "fa-solid fa-star text-sm",
            subtitle: "Padded short jacket",
            description: "This jacket is fantastic! I receive praises on the fit, color, and length every time I wear it. On a cold day it helps me stay warm. I can wear a sweater, even a cardigan, without feeling constrained."
        },
        {
            titles: "Nicole Grant",
            tag: "jacket",
            images: "people1.5.avif",
            images1:"circle5.avif",
            star: "fa-solid fa-star text-sm",
            subtitle: "Padded short jacket",
            description: "This jacket is fantastic! I receive praises on the fit, color, and length every time I wear it. On a cold day it helps me stay warm. I can wear a sweater, even a cardigan, without feeling constrained."
        },
        {
            titles: "Nicole Grant",
            tag: "jacket",
            images: "people1.6.avif",
            images1:"circle6.avif",
            star: "fa-solid fa-star text-sm",
            subtitle: "Padded short jacket",
            description: "This jacket is fantastic! I receive praises on the fit, color, and length every time I wear it. On a cold day it helps me stay warm. I can wear a sweater, even a cardigan, without feeling constrained."
        }
    ];
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <>
        <div className="mt-10 xl:hidden block  ">
        <Carousel responsive={responsive} transitionDuration={500} 
  draggable={false}
   keyBoardControl={true} removeArrowOnDeviceType={[ "mobile"]}  >
          {peoplelist.map((category, index) => (
                    <People_Image 
                        key={index} 
                        titles={category.titles} 
                        tag={category.tag} 
                        star={category.star} 
                        images={category.images} 
                        images1={category.images1}
                        subtitle={category.subtitle} 
                        description={category.description} 
                    />
                ))}
          </Carousel>
        </div>
    <div className="xl:mx-32  mt-20  hidden xl:grid xl:grid-cols-3 gap-10">
    {peoplelist.map((category, index) => (
                    <People_Image 
                        key={index} 
                        titles={category.titles} 
                        tag={category.tag} 
                        star={category.star} 
                        images={category.images} 
                        images1={category.images1}
                        subtitle={category.subtitle} 
                        description={category.description} 
                    />
                ))}
    </div>
           
           

        </>
    );
}
