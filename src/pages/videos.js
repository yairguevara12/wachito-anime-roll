import React from "react";
import "../style/util.css";
import VideoCard from "../components/videoCard";
import UseApi from "../util/useApi";
import "../style/videos.css";
import GridLoader from "react-spinners/GridLoader";
import { useParams } from 'react-router-dom';
export default function Videos() {
    const [showLoarder, setShowLoarder] = React.useState(true);

    /* const {location} = useLocation (); */
    /* const {genre} = useParams(); */
    const { genre } = useParams();
    /*  const [genreSearch, setGenreSearch] = React.useState(""); */

    /* 
    setGenreSearch(() => {

        
        return genre ? `,search:"${genre}"` : "";

    }) */

    /*     console.log(showLoarder);
     */


    function searchGenre() {

        return genre ? `,search:"${genre}"` : "";

    }


    const override = {
        display: "block",
        margin: "2em auto",
        borderColor: "green",
        alignSelf: "center"
    };
    const { dataApi, requestData } = UseApi({
        query: `
        query ($page: Int, $perPage: Int) { 
           Page(page: $page, perPage: $perPage) {
              pageInfo{
                 total
                 perPage
              }
              
            
            media(type:ANIME ${searchGenre()} , isAdult:false ){
                    title {         
                      english
                      userPreferred
                    }
                  coverImage {
                    extraLarge
                    large
                    medium
                    color
                  },
                  type
               }
              }
            
        }
        `
        ,
        variables: {
            page: 1,
            perPage: 18
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
                            userPreferred: "",
                        },
                        type: ""

                    }]


                }
            }
        }
    });


    React.useEffect(() => {
        requestData();

        setShowLoarder(true);
      

    }, [genre]);
    React.useEffect(() => {


        setTimeout(() => {
            setShowLoarder(false);
        }, 2000);


    }, [dataApi]);

/*     console.log(dataApi);
 */    const videoCards = dataApi.data.Page.media.map((item, index) => {

        const titleAnime = () => {
            return item.title.userPreferred ? item.title.userPreferred : item.title.english;
        }

        return <VideoCard key={index} img={item.coverImage.extraLarge} title={titleAnime()} type={item.type}  ></VideoCard>
    })
    return (
        <div className="flex normal-padding videos-container flex-direction-column">
            <h2>Anime mas Populares</h2>
            <div className="flex  videos-container-cards">

                {showLoarder && <GridLoader
                    color={"#36d7b7"}
                    loading={true}
                    cssOverride={override}
                    size={40}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />}

                {!showLoarder && videoCards}
            </div>

        </div>
    )

}