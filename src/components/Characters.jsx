import { fetchAllCharacters } from "../API";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Characters () {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState("")

    useEffect(() => {
        async function getAllCharacters() {
            const APIResponse = await fetchAllCharacters();
            if(APIResponse.success){
                setCharacters(APIResponse.data.characters)
            } else {
                setError(APIResponse.error.message)
            }
        } 
        getAllCharacters(); 
    },[]);

    const characterToDisplay = searchParam
        ? characters.filter((characters) => 
        characters.name.toLowerCase().includes(searchParam))
        : characters; 
    return (
        <>
        <div>
         <label>
           Search:{" "}
          <input type="text" 
             placeholder="search"
           onChange={(e) => setSearchParam(e.target.value.toLowerCase())}/>
         </label>
        </div>
        {characterToDisplay.map((character)=> {
            return <><div id="character">
            <h2 key={character.id}>{character.name}</h2>
            {/* <p className="description">{post.description}</p>
            <p>Price: {post.price}</p>
            <h3>Seller: {post.author.username}</h3>
            <p>Location: {post.location}</p> {/* add if the seller is willing to deliver */}
          </div>
            </>
        })}
        </>
        
        
    )

}
export default Characters;