import axios from 'axios'
const weatherApi = 'http://api.openweathermap.org/data/2.5/weather';
const weatherAPIKey = 'ab34560068dc014a04dae465e051823b';
const scale = "metric" //metric

export default async (city)=>{
    const weatherUrl = `${weatherApi}?q=${city}&units=${scale}&appid=${weatherAPIKey}`;
    const response = await axios.get(weatherUrl);
    return {
        type: "cityUpdate",
        payload: response.data
    }
}