import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import CityComponent from './myComponents/CityComponent';
import WeatherComponent from './myComponents/WeatherComponent';
const API_KEY = ''; //ADD YOUR API SECRET KEY HERE
const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 255, 0.5);
  align-items: center;
  margin: auto;
  box-shadow: 0 2px 3px 0 black;
  width: 380px;
  padding: 10px 20px;
  color: white;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
`;
const HeadComponent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.8em;
  font-weight: bold;
  text-align: center;
  margin-top: 20px
`
const FooterComponent = styled.div`
  color: white;
  font-size: 0.8em;
  font-weight: bold;
  weight: 50px;
  height: 50px;

`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async(e) =>{
    e.preventDefault();
    const response =await axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    updateWeather(response.data);
  };
  return (
  <MainComponent>
    <HeadComponent>
      Weather Forecasting Application
    </HeadComponent>
    {weather? (
      <WeatherComponent weather={weather}/>
    ):(
      <CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>
    )}
    
    <FooterComponent>
      Made with &#10084; by Abiyad Al Munir
    </FooterComponent>
  </MainComponent>
  );
}

export default App;
