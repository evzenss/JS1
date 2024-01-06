//import axios from "axios"
//const axios = require("axios")

function hello(){
    console.log("Hello W!")
    console.error("NO!")
    console.warn("bad!")
}

async function getCharacters(){
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character/?page=19")
        //const characters = await axios.get("https://rickandmortyapi.com/api/character/?page=19")  
        // characters=1  
        const characters = await response.json()
        console.log(characters.results)
    } catch (error) {
        console.error(error)    
    }
}
