import React from "react";
import "../style/search.css";
import "../style/util.css";
import ResultCard from "../components/resultCard";
import UseApi from "../util/useApi";

export default function Search(props) {
    const [search, setSearch] = React.useState("");

    const [dataApi, requestData] = UseApi({
        query: `
        query ($page: Int, $perPage: Int   ) { 
           Page(page: $page, perPage: $perPage) {
             
            pageInfo{
                total
                perPage
            }
            
           
            media(search : "${search}" , type: ANIME, isAdult : false){
                  title {         
                    english
                    userPreferred
                  }
                coverImage {
             
                  extraLarge
            
                  color
                  
                } ,
                type , 
                episodes
             }
              
            }
        }
        `
        ,
        variables: {
            page: 1,
            perPage: 10,

            type: 'ANIME'
        },
        default: {
            data: {
                Page: {


                    media: [{
                        id: 0,
                        coverImage: {
                            extraLarge: "",
                            color: ""
                        },
                        title: {
                            english: "",
                            userPreferred: ""
                        },
                        type: "",
                        episodes: 0


                    }]


                }
            }
        }
    });
    function searchValue(e) {
        setSearch(e.target.value);

    }

    React.useEffect(() => {


    requestData();



    }, [search]);

    console.log(search);

    const resultCards = dataApi.data.Page.media.map((item, index) => {
        const titleAnime = () => {
            return item.title.userPreferred ? item.title.userPreferred : item.title.english;
        }
        return <ResultCard type={item.type} episodes={item.episodes} title={titleAnime()} img={item.coverImage.extraLarge} key={index}></ResultCard>
    })


    return (
        <div className="search-container flex flex-justify-center flex-column">
            <input onChange={searchValue} className="" type="search"></input>
            <p className="search-title">Resultados más relevantes</p>
            <div className="search-result">
                {search && resultCards}
            </div>

        </div>)
}