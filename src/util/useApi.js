
import { useState } from "react";
function UseApi(props) {

    const [dataApi, setDataApi] = useState(props.default);


    /*    React.useEffect(()=>{
          
           requestData();
       },[]) */

    // Here we define our query as a multi-line string
    // Storing it in a separate .graphql/.gql file is also possible
    /*  var query = `
 query ($id: Int) { # Define which variables will be used in the query (id)
   Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
     id
     title {
       romaji
       english
       native
     }
   }
 }
 `; */

    // Define our query variables and values that will be used in the query request
    /*  var variables = {
         id: 15125
     }; */

    // Define the config we'll need for our Api request
    function getOptions() {

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: props.query,
                variables: props.variables
            })
        };
        return options;
    }

    // Make the HTTP Api request
    function requestData() {
        setTimeout(() => {
            const url = 'https://graphql.anilist.co';
            const options = getOptions();
            fetch(url, options).then(handleResponse)
                .then(data => setDataApi(data))
                .catch(handleError);
        }, 3000);
    }

    function handleResponse(response) {
        return response.json().then(function (json) {
            return response.ok ? json : Promise.reject(json);
        });
    }



    function handleError(error) {
        //  alert('Error, check console');
        if (dataApi) {
            setDataApi([{ error: error }]);
        }
    }

    return [dataApi, requestData]
}
export default UseApi;