const form = document.getElementById('cityForm');
const city = document.getElementById('input');
const button = document.getElementById('button');
const swapCity = document.getElementById('swapCity');
const viewerCity = document.getElementById('viewerCity');
const temp = document.getElementById('temp');

const array = [];

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = city.value;
    const apiKey = 'bf230628b2cac413f32a03ce4fb50c3e'; // этот ключ имеет ограничение в кол-ве запросов, если будут ошибки - придется сгенерировать новый или спросить в чате
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(function(data){
            swapCity.innerHTML = data.name;
            temp.innerHTML = Math.round(data.main.temp - 273.16) + `°`;
            viewerCity.insertAdjacentHTML('beforeend', `
            <a id="historyListCity" class="cites-view" href="">${data.name}</a>
            `)
        })
 

    city.value = '';

    // const historyListCity = document.getElementById('historyListCity');
})

