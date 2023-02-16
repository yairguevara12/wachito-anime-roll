import React from "react";
import UseApi from "../util/useApi";
import CardAnime from "./cardAnime";
import "../style/util.css";
import "../style/home.css";
function CardsBar(props) {

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
                            english: "" ,
                            userPreferred :""
                        },
                        type: ""

                    }]


                }
            }
        }
    });



    React.useEffect(() => {
        requestData();
    }, []);

    // requestData();

    const cards = dataApi.data.Page.media.map((item , index ) => {
        const titleAnime = () => {
            return item.title.userPreferred ?  item.title.userPreferred  : item.title.english ;
         }
        return <CardAnime key={index} img={item.coverImage.large} title={titleAnime()} type={item.type}></CardAnime>
    });


    return (
        <div className="flex cardsBar">
            {cards}
        </div>
    )
}

export default CardsBar;