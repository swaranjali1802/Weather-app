       const apiKey="2c03676481b8ea086ac6039a902b5525";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchbox=document.querySelector(".search input");
        const searchbtn=document.querySelector(".search button");
        const weatherIcon=document.querySelector(".weather-app")

        async function checkweather(city) {
            const response=await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{
                var data=await response.json();

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
                if(data.weather[0].main == "Rain"){
                    weatherIcon.src = "images/img3.jpeg";
                }
                else if(data.weather[0].main == "Clear"){
                    weatherIcon.src = "images/img2.png";
                }
                else if(data.weather[0].main == "Clouds"){
                    weatherIcon.src = "images/img2.png";
                }
                else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src = "images/c3.jpeg";
                }
                else if(data.weather[0].main == "Mist"){
                    weatherIcon.src = "images/c4.jpeg";
                }
                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display="none";

            }   
        }
        searchbtn.addEventListener("click",()=>{
            checkweather(searchbox.value);
        })
