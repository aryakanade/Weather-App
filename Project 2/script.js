const API_KEY = "ztiLQS1qkwMg1mvopGLOoz2vAkSXqqLE";

async function showWeather(){
    let city = "bhopal";

    const response = await fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${API_KEY}`);

    const data = await response.json();
    console.log("Weather data -> ",  data);
    

    // let newPara = document.createElement('p')
    // newPara.textContent = `${data?.values.toFixed(2)} C`
    // document.body.appendChild(newPara);
}

async function getCustomWeatherDetails(){

    try{

        let result = await fetch(`https://api.tomorrow.io/v4/timelines?location=15.6333,18.3333&fields=temperature&timesteps=1h&units=metric&apikey=${API_KEY}`);

        let data = await result.json();
        console.log(data);

    }
    catch(err){
        console.log("Error Found ",err);

    }
    
}

function getLocation() {
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        console.log("No geolocation support")
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    console.log(lat);
    console.log(long);
}



// https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}

// https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}

// e0e52aafeaec96680a33f3d32cc897a7