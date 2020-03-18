const apiKey = '';

const myWeather = {
        searchWeather() {
            return fetch(`api.openweathermap.org/data/2.5/weather?q={city}&units=metric`, {
                    headers: {
                        Authorization: `Bearer ${apiKey}`
                    }
                }).then(response => {
                    return response.json();
                }).then(
                    jsonResponse => {
                        if (jsonResponse.main) {
                            return jsonResponse.main.map(((temperature) => {
                                            return {
                                                city: currentTemp: business.id,
                                                minTemp: business.image_url,
                                                maxTemp: business.name,
                                                icon: business.location.address1,
                                                city: business.location.city,
                                            }