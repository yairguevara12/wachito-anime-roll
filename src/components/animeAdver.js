import React from "react";
import "../style/util.css";
import "../style/animeAdver.css";
import UseApi from "../util/useApi";
import playIcon from "../img/boton-de-play.png";

export default function AnimeAdver(props) {


    const {dataApi, requestData} = UseApi({
        query: `
    query ($page: Int, $perPage: Int , $id: Int) { 
       Page(page: $page, perPage: $perPage) {
          pageInfo{
             total
             perPage
          }
          media(id : $id){
            id,
            type ,
            format 
              
               title{
              native,
              english
            }
            description,
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
            perPage: 1,
            id: props.idAnime
        }
        ,
        default: {
            data: {
                Page: {
                    media: [
                        {
                            coverImage: {
                                color: "",
                                extraLarge: "",
                                large: "",
                                medium: ""
                            },
                            description: "",
                            format: "",
                            id: 0,
                            title: "",
                            type: ""
                        }
                    ]
                }
            }
        }
    });

    React.useEffect(() => {
        requestData();

    }, [])
    const objAnime = dataApi.data.Page.media[0];

    function shorterDescription(description){
        let finalDescription = "";
        if(objAnime.description.length > 200){
            finalDescription = objAnime.description.slice(0,200) + "...";
        }else{
            finalDescription = description ;
        }
        return finalDescription ;
    }
    return (
        <>
            <div className="animeAdver-body flex flex-direction-column max-total-width">
                <div className="flex flex-between anime-pictures normal-padding">
                    <img alt="anime" src={props.character} className="anime-character"></img>
                    <img alt="anime" src={objAnime.coverImage.large} className="anime-cover"></img>
                </div>
                <div className="flex flex-direction-column normal-padding">
                    <p className="anime-title">{objAnime.title.english}</p>
                    <div className="flex anime-format">
                        <p>{objAnime.format}</p>
                    </div>
                    <div className="flex">
                        <p>{
                        
                        shorterDescription(objAnime.description)
                        
                        
                        
                        }</p>
                    </div>
                    <div>
                        <button className="animeAdver-button flex flex-align-center flex-justify-center">
                            <img className="play-icon" alt="play icon" src={playIcon}  ></img>
                            COMENZAR A VER T1 E1</button>
                    </div>
                </div>
            </div>
        </>
    )
}