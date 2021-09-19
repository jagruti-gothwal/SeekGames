document.getElementById('btn').addEventListener('click', showNewGames)

function showNewGames() {
    let games = document.getElementById('games').value
    let url = 'https://api.rawg.io/api/platforms?key=30e28e4aa7574c459adc46caeecc57e9'+games
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data);
    }).catch(e=>{
        console.log(e);
    })
    
}