import React from "react";
import UseApi from "../util/useApi";
import CardAnime from "./cardAnime";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../style/util.css";
import "../style/home.css";
function CardsBar(props) {

    /*     const cardBarElement = React.useRef(null);
        const [firstBardScroll, setFirstBardScroll] = React.useState(0); */

    /*  function cardBarToRight() {
 
 
         const cardWidth = cardBarElement.current.querySelector(".card-anime").scrollWidth;
 
 
 
         const cardTotal = cardBarElement.current.querySelectorAll(".card-anime");
         cardBarElement.current.scrollLeft = firstBardScroll;
         setFirstBardScroll((prev) => {
 
             const ignoreNumber = Math.round((window.innerWidth / cardWidth));
             const cardBarWidth = (cardTotal.length - ignoreNumber) * (cardWidth + 20);
 
             if (cardBarWidth > prev) {
                 return prev + (cardWidth + 20);
             } else {
                 return prev;
             }
 
 
         });
 
 
         console.log("ga->" + Math.round((window.innerWidth / cardWidth)));
         console.log("right->" + firstBardScroll);
     }
 
 
     function cardBarToLeft() {
 
 
         const cardWidth = cardBarElement.current.querySelector(".card-anime").scrollWidth;
 
 
         cardBarElement.current.scrollLeft = (firstBardScroll - 230);
         console.log((firstBardScroll - 230));
         setFirstBardScroll((prev) => {
             return (prev - ((cardWidth) + 20));
 
         });
 
 
 
     } */

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
            , slidesToSlide: 1 // optional, default to 1.
        }
    };


    const [dataApi, requestData] = UseApi({
        query: `
        query ($page: Int, $perPage: Int) { 
           Page(page: $page, perPage: $perPage) {
             
            pageInfo{
                total
                perPage
            }
            
           
                          media(genre: "${props.genre}" ){
                  title {         
                    english
                    userPreferred
                  }
                coverImage {
                  extraLarge
                  large
                  medium
                  color
                  
                }
             }
              
            }
        }
        `
        ,
        variables: {
            page: props.page,
            perPage: 12
        },
        default: {
            data: {
                Page: {


                    media: [{
                        coverImage: {
                            extraLarge: "",
                            color: ""
                        },
                        title: {
                            english: "-",
                            userPreferred: "-"
                        },
                        type: ""

                    }]


                }
            }
        }
    });



    React.useEffect(() => {
        requestData();

        /*  setTimeout(() => {
             setFirstBardScroll(cardBarElement.current.querySelector(".card-anime").scrollWidth);
         }
             , 2000) */
    }, []);



    const cards = dataApi.data.Page.media.map((item, index) => {
        const titleAnime = () => {
            return item.title.userPreferred ? item.title.userPreferred : item.title.english;
        }
        return <CardAnime key={index} img={item.coverImage.large} title={titleAnime()} type={item.type}></CardAnime>
    });


    return (
        <>
           {props.children}
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                partialVisible={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                //draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile"]}

            >
                {cards}

            </Carousel>


        </>
    )
}

export default CardsBar;