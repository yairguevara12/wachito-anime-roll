import React from "react";
import MainNavbar from "./mainNavbar";
import UseApi from "../util/useApi";
import CardsBar from "./cardsBar";
import "../style/navBar.css";
import "../style/util.css";
import AnimeAdver from "./animeAdver";
import goku from "../img/goku-background.png";
import myHeroAcademy from "../img/my-hero-acedemy.png";
import BannerAnime from "./bannerAnime";
import chainsawMan from "../img/chain-saw-man.png";
function HomeBody(props) {

   // const [dataHero, setDataHero] = React.useState();






   const { dataApi, requestData } = UseApi({
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
         perPage: 6
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

   function shownBody(){
      return !props.loarderIsShown ? {display : ""} : {display:"none"} 
   }



   // requestData();

   //console.log(dataApi);
/*    console.log(dataApi);
 */   const navbar = dataApi.data.Page.mediaTrends.map((element, id) => {

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
      <div style={shownBody()}>
         <MainNavbar>
            {
               navbar
            }
         </MainNavbar>

         <CardsBar  genre='Sci-fi' page={1}>
            <div className="cardsBar-Title normal-padding max-total-width">
               <h3>!Míralos gratis en febrero!</h3>
               <p>!Enamórate con un nuevo anime este mes!</p>
            </div>
         </CardsBar>
         <AnimeAdver idAnime={813} character={goku}></AnimeAdver>
         <br></br>
         <BannerAnime idAnime={1}></BannerAnime>
         <br></br>
         <AnimeAdver idAnime={21459} character={myHeroAcademy}></AnimeAdver>
         <br></br>
         <CardsBar genre='romance' page={2}>
            <div className="cardsBar-Title normal-padding max-total-width">
               <h3>!Los mejores Romances!</h3>
               <p>!Llora y disfruta del amor de primavera!</p>
            </div>
         </CardsBar>
         <BannerAnime idAnime={20954}></BannerAnime>


         <CardsBar genre='Action' page={3}>
            <div className="cardsBar-Title normal-padding max-total-width">
               <h3>!Accion explosiva!</h3>
               <p>!recarga y dispara!</p>
            </div>
         </CardsBar>


         <CardsBar genre='Psychological' page={1}>
            <div className="cardsBar-Title normal-padding max-total-width">
               <h3>!Juegos Mentales!</h3>
               <p>!nunca se sabe como terminara!</p>
            </div>
         </CardsBar>
         <AnimeAdver idAnime={127230} character={chainsawMan}></AnimeAdver>
         <br></br>
         <br></br>
         <BannerAnime idAnime={20807}></BannerAnime>
         <br></br>
         <br></br>
         <CardsBar genre='Drama' page={1}>
            <div className="cardsBar-Title normal-padding max-total-width">
               <h3>!La controversia del amor!</h3>
               <p>!Amorrrrr....!</p>
            </div>
         </CardsBar>

         <CardsBar genre='Fantasy' page={1}>
            <div className="cardsBar-Title normal-padding max-total-width">
               <h3>!Morir y Rencarnar!</h3>
               <p>!Veremos que les espera en su segunda vida!</p>
            </div>
         </CardsBar>
         <br>
         </br>
         <BannerAnime idAnime={16498}></BannerAnime>
         <br>
         </br>
         <br>
         </br>
      </div>
   )
}
export default HomeBody;