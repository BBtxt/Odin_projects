
var key = config.MY_API_KEY;
console.log(key)

document.getElementById('reload').addEventListener('click', ()=>{
    setTimeout(()=> {
        window.location.reload()
    }, 500)
})

const img = document.querySelector('img');
fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=dogs`)
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        img.src = response.data.images.original.url
    });