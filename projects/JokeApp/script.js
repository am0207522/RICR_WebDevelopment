 async function GetNewJoke(){
    const API_URl = "https://official-joke-api.appspot.com/jokes/random";

    const response = await fetch(API_URl);

    const data = await response.json();
    
   
    document.getElementById("setup").innerText = data.joke || data.setup;
    document.getElementById("punchline").innerText = data.punchline || "";

}