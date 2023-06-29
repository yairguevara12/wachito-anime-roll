import React from "react";
import "../style/search.css";
import "../style/util.css";
import ResultCard from "../components/resultCard";
import UseApi from "../util/useApi";
import HashLoader from "react-spinners/HashLoader";
import useToken from "../util/useToken";


export default function Search(props) {
    const [search, setSearch] = React.useState("");
    const [showLoarder, setShowLoarder] = React.useState(false);
    const override = {
        display: "block",
        margin: "2em auto",
        borderColor: "green",
        alignSelf: "center"
    };
    const { validateTokenInStorage } = useToken();
    //isAdult : false
    const { dataApi, setDataApi, requestData } = UseApi({
        query: `
        query ($page: Int, $perPage: Int   ) { 
           Page(page: $page, perPage: $perPage) {
             
            pageInfo{
                total
                perPage
            }
            
           
            media(search : "${search}" , type: ANIME){
                id,  
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
        setDataApi({
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
                        episodes: ""


                    }]


                }
            }
        });
    }

    React.useEffect(() => {


        requestData();
        search ? setShowLoarder(true) : setShowLoarder(false);



    }, [search]);
    React.useEffect(() => {
        /* validateTokenInStorage(); */
    }, []);
    React.useEffect(() => {

        /*         console.log(dataApi);
         */
        if (dataApi.data.Page.media.length > 0) {
            if (dataApi.data.Page.media[0].id > 0) {

/*                 console.log("showloarder");
 */                setShowLoarder(false);

            }
        } else {
            /*             console.log("NOT showloarder");
             */
            search ? setShowLoarder(true) : setShowLoarder(false);


        }


    }, [dataApi]);



    const resultCards = dataApi.data.Page.media.map((item, index) => {
        const titleAnime = () => {
            return item.title.userPreferred ? item.title.userPreferred : item.title.english;
        }
        return <ResultCard type={item.type} episodes={item.episodes} title={titleAnime()} img={item.coverImage.extraLarge} key={index}></ResultCard>
    })


    return (
        <div className="search-container flex flex-justify-center flex-column">
            <input placeholder="Buscar..." onChange={searchValue} className="" type="search"></input>
            <p className="search-title">Resultados más relevantes</p>
            <div className="search-result flex flex-direction-column">


                {showLoarder && <HashLoader
                    color={"#36d7b7"}
                    loading={true}
                    cssOverride={override}
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />}


                {search && resultCards}
            </div>

        </div>)
}