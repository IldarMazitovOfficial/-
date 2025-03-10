

let mode = 'full'
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')
const weatherBtn = document.getElementById('weather');

const apiKey = 'e1a9964b00cb125515340c2b91a4a305';
const city = 'Ufa';

function bindMode(name) {
    return function() {
        mode = name
        update()
    }
}


fullBtn.onclick = bindMode('full')

dateBtn.onclick = bindMode('date')

timeBtn.onclick = bindMode('time')

weatherBtn.onclick = bindMode('weather')

setInterval(() => {
    update();
    if (mode === 'weather') fetchWeather();
}, 1000);

update();

async function update() {
    if (mode === 'weather' || mode === 'full') {
        await fetchWeather();
    } else {
        output.textContent = format(mode);
    }
}


function format(formatMode) {
    const now = new Date()

    switch (formatMode){
    case 'time':
        return now.toLocaleTimeString()
    case 'date':
        return now.toLocaleDateString()   
    case 'full': 
        return now.toLocaleDateString() + ' | ' + now.toLocaleTimeString();
    default:
        return now.toLocaleTimeString()
    }
}


async function fetchWeather() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${apiKey}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        const temperature = Math.round(data.main.temp); 
        const description = data.weather[0].description;
        
        if (mode === 'full') {
            output.textContent = `${format('full')} | ${temperature}°C, ${description}`;
        } else {
            output.textContent = `${temperature}°C, ${description}`;
        }
    } catch (error) {
        console.error('Ошибка загрузки погоды:', error);
    }
}
