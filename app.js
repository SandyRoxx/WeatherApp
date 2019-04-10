(function() {
    let btn = document.getElementById('btn');
    let city = document.getElementById('city');
    let country = document.getElementById('country');
    let location = document.getElementById('location');
    let temperature = document.getElementById('temperature');
    let humidity = document.getElementById('humidity');
    let windspeed = document.getElementById('wind');
    let visibility = document.getElementById('visibility');




    function networkApi(cityval, countryval) {

        fetch(`https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?q=${cityval},${countryval}&appid=a3e3b22fc9205e235a9a7eb7ac4c89ce`)
            .then(function(result) {
                return result.json();
            })
            .then(function(data) {
                location.innerText = data.name;
                humidity.innerText = data.main.humidity + " %";
                temperature.innerText = Math.round(1.8 * (data.main.temp - 273) + 32) + " °C";
                windspeed.innerText = Math.round(data.wind.speed * 1.60933999997536) + " kph";
                visibility.innerText = Math.round(data.visibility / 1000);
                console.log(data.main);
            }).catch(function() {});
    }
    btn.addEventListener('click', function() {
        let cityval = city.value;
        let countryval = country.value;
        networkApi(cityval, countryval);

    });

    (function() {
        location.innerText = "";
        temperature.innerText = "";
        humidity.innerText = "";
        windspeed.innerText = "";
        visibility.innerText = "";
    })();

})();