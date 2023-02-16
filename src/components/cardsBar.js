import React from "react";
import UseApi from "../util/useApi";
import CardAnime from "./cardAnime";

import "../style/util.css";
import "../style/home.css";
function CardsBar(props) {

    const autoScroll = React.useRef(null);

    function autoScrollStart() {
        
        if (autoScroll.current) {
            
            const flavoursScrollWidth = autoScroll.current.scrollWidth;
            //  console.log(autoScroll.current.);  
           /*  window.addEventListener('load', () => {
                console.log(flavoursScrollWidth);
                  window.setInterval(() => {
                     if (autoScroll .scrollLeft !== flavoursScrollWidth ) {
                         autoScroll.scrollTo(autoScroll.scrollLeft + 1, 0);
                     }
                   }, 15); 
            }); */
        }
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
        autoScrollStart();
    }, []);

    // requestData();

    const cards = dataApi.data.Page.media.map((item, index) => {
        const titleAnime = () => {
            return item.title.userPreferred ? item.title.userPreferred : item.title.english;
        }
        return <CardAnime key={index} img={item.coverImage.large} title={titleAnime()} type={item.type}></CardAnime>
    });


    return (
        <div ref={autoScroll} className="flex cardsBar medium-padding">
            {cards}
        </div>
    )
}

export default CardsBar;