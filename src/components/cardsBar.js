import React from "react";
import UseApi from "../util/useApi";
import CardAnime from "./cardAnime";

import "../style/util.css";
import "../style/home.css";
function CardsBar(props) {

    const autoScroll = React.useRef(null);
    const [firstBardScroll, setFirstBardScroll] = React.useState(window.innerWidth);

    function autoScrollStart() {

        /*   console.log(autoScroll.current.scrollWidth);
          console.log(window.innerWidth); */
        setFirstBardScroll((prev) => {
            if(prev !== 0){
                return   prev + window.innerWidth
            }else{
                return window.innerWidth;
            }
        });
      //  console.log(firstBardScroll);
        console.log(autoScroll.current.scrollWidth - firstBardScroll);
/*             autoScroll.current.scrollLeft = autoScroll.current.scrollWidth;
 */            autoScroll.current.scrollLeft = firstBardScroll;

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
        //  autoScrollStart();

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
            <div ref={autoScroll} className="flex cardsBar medium-padding">
                {cards}

            </div>
            <button onClick={autoScrollStart}>TEST</button>
        </>
    )
}

export default CardsBar;