let imgdiv = document.querySelector(`.img_div`);


let myFunction = () =>{

    imgdiv.style.display = "block";

    let city = document.querySelector("#city").value;
    axios.get(`https://api.weatherapi.com/v1/current.json?key=b52a1217af194e27bfa155504223006&q=${city}`)
    .then(function (response) {
        // handle success
        const data = response.data;

        console.log(data);
       
       let icon = data.current.condition.icon;
       icon.replace("/file// ");
    document.getElementById("weather_icon").src = icon;
    document.querySelector("#tempC").innerText = data.current.temp_c + "°C";
    
    document.querySelector("#tempF").innerText = data.current.temp_f + "°F";


    document.querySelector("#city_name").innerText = data.location.name + ", " ;
    document.querySelector("#time").innerText = data.location.localtime + ", " ;
    document.querySelector("#last_update").innerText = data.current.last_updated + ", " ;
    document.querySelector("#weather_condition").innerText = data.current.condition.text;

    document.querySelector("#feels_like").innerText = "Feels Like: "+ data.current.feelslike_c + "°C";
    document.querySelector("#wind_speed").innerText = "Wind Speed: " + data.current.wind_kph + "KP/H";
    document.querySelector("#humidity").innerText = "Humidity: " + data.current.humidity + "%";


    document.querySelector("#visibility").innerText = "Visibility : " + data.current.vis_km + "KM";
    


    // getWeatherData();  

    })

    

}