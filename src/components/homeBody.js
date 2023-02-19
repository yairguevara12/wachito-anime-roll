import React from "react";
import MainNavbar from "./mainNavbar";
import UseApi from "../util/useApi";
import CardsBar from "./cardsBar";
import "../style/navBar.css";
import "../style/util.css";
import AnimeAdver from "./animeAdver";
function HomeBody() {

   // const [dataHero, setDataHero] = React.useState();

   const [dataApi, requestData] = UseApi({
      query: `
      query ($page: Int, $perPage: Int) { 
         Page(page: $page, perPage: $perPage) {
            pageInfo{
               total
               perPage
            }
            
            mediaTrends{
                     media{
                  title {         
                    english
       
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
      }
      `
      ,
      variables: {
         page: 1,
         perPage: 5
      },
      default: {
         data: {
            Page: {
               mediaTrends: [
                  {
                     media: {
                        coverImage: {
                           extraLarge: "",
                           color: ""
                        },
                        title: {
                           english: ""
                        }

                     }
                  }
               ]
            }
         }
      }
   });



   React.useEffect(() => {
      requestData();
   }, []);

   // requestData();

   //console.log(dataApi);

   const navbar = dataApi.data.Page.mediaTrends.map((element, id) => {

      const styleColor = () => {
         return element.media.coverImage.color ? { backgroundColor: element.media.coverImage.color } : { backgroundColor: "#2abdbb" };
      }
      // console.log(element.media.coverImage.color); 
      return (
         id === 0 ?
            <div key={id} className=" carousel-item flex active">
               <div style={styleColor()} className="flex flex-justify-center carousel-item-container flex-direction-column">
                  <div className="flex flex-justify-center carousel-container-img ">
                     <img src={element.media.coverImage.extraLarge} className="carousel-img" alt={element.media.title.english} />
                  </div>
                  <div className="flex flex-justify-center carousel-item-name"><p className="normal-margin">{element.media.title.english}</p></div>
                  <div className="flex flex-justify-center carousel-item-button"><a className="medium-padding normal-margin" href="/">Ver ahora</a></div>
               </div>
            </div>
            :
            <div key={id} className="carousel-item flex ">
               <div style={styleColor()} className="flex flex-justify-cente carousel-item-container flex-direction-column">
                  <div className="flex flex-justify-center carousel-container-img">
                     <img src={element.media.coverImage.extraLarge} className=" carousel-img" alt={element.media.title.english} />
                  </div>
                  <div className="flex flex-justify-center carousel-item-name "><p className="normal-margin">{element.media.title.english}</p></div>
                  <div className="flex flex-justify-center carousel-item-button"><a className="medium-padding normal-margin" href="/">Ver ahora</a></div>
               </div>
            </div>
      )
   });
   return (
      <div>
         <MainNavbar>
            {
               navbar
            }
         </MainNavbar>

         
         <CardsBar></CardsBar>
         <AnimeAdver></AnimeAdver>
      </div>
   )
}
export default HomeBody;