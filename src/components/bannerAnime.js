import React from "react";
import "../style/util.css";
import "../style/bannerAnime.css";
import UseApi from "../util/useApi";
export default function BannerAnime(props) {

    const [dataApi, requestData] = UseApi({
        query: `
    query ($page: Int, $perPage: Int , $id: Int) { 
       Page(page: $page, perPage: $perPage) {
          pageInfo{
             total
             perPage
          }
          media(id : $id){
           
            bannerImage ,
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
                            bannerImage : "" ,
                            coverImage : {
                                extraLarge : "" ,
                                large : "" , 
                                medium : "" ,
                                color : ""
                            }
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
    function backgroundImage(){
        return {
            backgroundColor : `${objAnime.coverImage.color}`
        }
    }

    return (<>
        <div style={backgroundImage()} className="banner-anime">
            <img alt="banner-anime" src={objAnime.bannerImage}></img>
            <div className=" flex  flex-justify-center"><button className="">ver ahora</button></div>
        </div>

    </>)
}