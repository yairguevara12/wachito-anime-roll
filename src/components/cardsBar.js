import React from "react";
import UseApi from "../util/useApi";
import CardAnime from "./cardAnime";

import "../style/util.css";
import "../style/home.css";
function CardsBar(props) {

    const cardBarElement = React.useRef(null);
    const [firstBardScroll, setFirstBardScroll] = React.useState(0);

    function cardBarToRight() {

        /*   console.log(cardBarElement.current.scrollWidth);
          console.log(window.innerWidth); */
        const cardWidth = cardBarElement.current.querySelector(".card-anime").scrollWidth;
        // console.log(firstBardScroll);


        const cardTotal = cardBarElement.current.querySelectorAll(".card-anime");
        cardBarElement.current.scrollLeft = firstBardScroll;
        setFirstBardScroll((prev) => {
            // cardBarElement.current.scrollLeft = prev;

            //const cardBarWidth = cardTotal.length * (cardWidth + 20) ;
            /*  if (cardBarWidth > prev) { */
            const ignoreNumber = Math.round((window.innerWidth / cardWidth));
            const cardBarWidth = (cardTotal.length - ignoreNumber) * (cardWidth + 20);
           
            if (cardBarWidth > prev) {
                return prev + (cardWidth + 20);
            } else {
                return prev;
            }
            /*   } else {
                  return prev;
              }
   */

        });

        //  console.log(firstBardScroll);
        //console.log(cardBarElement.current.scrollWidth - firstBardScroll);
        //  console.log(cardBarElement.current.querySelector(".card-anime").scrollWidth);
        /*             cardBarElement.current.scrollLeft = cardBarElement.current.scrollWidth;
         */
        // console.log("total->" + (cardBarWidth.length * ));
        //const cardBarWidth = cardTotal.length * (cardWidth);
        console.log("ga->" + Math.round((window.innerWidth / cardWidth)));
        console.log("right->" + firstBardScroll);
    }


    function cardBarToLeft() {

        /*   console.log(cardBarElement.current.scrollWidth);
          console.log(window.innerWidth); */
        const cardWidth = cardBarElement.current.querySelector(".card-anime").scrollWidth;
     
        // console.log("Left->" + firstBardScroll);
        // console.log("Left->" + (firstBardScroll - (cardWidth + 20)));
        cardBarElement.current.scrollLeft = (firstBardScroll - 230);
        console.log((firstBardScroll - 230));
        setFirstBardScroll((prev) => {
            // cardBarElement.current.scrollLeft = prev;
            return (prev - ((cardWidth) + 20));

        });
        //  console.log(firstBardScroll);
        //console.log(cardBarElement.current.scrollWidth - firstBardScroll);
        //  console.log(cardBarElement.current.querySelector(".card-anime").scrollWidth);
        /*             cardBarElement.current.scrollLeft = cardBarElement.current.scrollWidth;
         */


    }




    const [dataApi, requestData] = UseApi({
        query: `
        query ($page: Int, $perPage: Int) { 
           Page(page: $page, perPage: $perPage) {
             
            pageInfo{
                total
                perPage
            }
            
           
                          media(genre: "Sci-Fi" ){
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
            page: 1,
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
                            english: "",
                            userPreferred: ""
                        },
                        type: ""

                    }]


                }
            }
        }
    });



    React.useEffect(() => {
        requestData();
        ///  setFirstBardScroll(cardBarElement.current.querySelector(".card-anime").scrollWidth + 16);
        //  cardBarToRight();
        //  console.log(cardBarElement.current.querySelector(".card-anime"));

        //console.log(cardBarElement.current.querySelector(".card-anime").scrollWidth);
        setTimeout(() => {
            setFirstBardScroll(cardBarElement.current.querySelector(".card-anime").scrollWidth);
        }
            , 2000)
    }, []);

    // requestData();

    const cards = dataApi.data.Page.media.map((item, index) => {
        const titleAnime = () => {
            return item.title.userPreferred ? item.title.userPreferred : item.title.english;
        }
        return <CardAnime key={index} img={item.coverImage.large} title={titleAnime()} type={item.type}></CardAnime>
    });


    return (
        <>
            <div ref={cardBarElement} className="flex cardsBar ">
                {cards}

            </div>
            <button onClick={cardBarToRight}>right</button>
            <button onClick={cardBarToLeft}>left</button>

        </>
    )
}

export default CardsBar;