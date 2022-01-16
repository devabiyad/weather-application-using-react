import styled from "styled-components";
export const WeatherInfoIcons = {
    Sunset: "/icons/temp.svg",
    Sunrise: "/icons/temp.svg",
    Humidity: "/icons/humidity.svg",
    Wind: "/icons/wind.svg",
    Pressure: "/icons/pressure.svg",
};
const WeatherHeader = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px;
    width: 100%;
    align-item: center;
    justify-content: space-between;
`;
const WeatherCondition = styled.span`
    font-size: 1.5em;
    margin: 20px;
    & span{
        font-size: 1.5em;
    }
`;
const Weatherlogo = styled.img`
width: 80px;
height: 80px;
`;
const WeatherLocation = styled.span`
font-size: 1.5em;
font-weight: bold;
`;
const WeatherInfoContainer=styled.div`
display: flex;
flex-direction: row;
width: 95%;
justify-content: space-evenly;
align-item: center;
flex-wrap: wrap;
border-radius: 10px;
margin: 20px;
`;
const InfoContainer = styled.div`
display: flex;
flex-direction: row;
width: 45%;
margin: 5px 5px;
justify-content: left;
align-item: left;
flex-wrap: wrap;
background-color: rgba(0, 0, 255, 0.1);
border-radius: 5px;
box-shadow: black 0px 1px 4px 0px;
`;
const InfoIcon = styled.img`
width: 35px;
height: 35px;
align-item: center;
justify-content: center;
margin: 10px 10px;
`;
const InfoData = styled.div`
display: flex;
flex-direction: column;
font-size: 0.8em;
padding: 5px;
& span{
    font-size: 1.2em;
    font-weight: bold;
    padding: 3px;
}
`;


const WeatherInfoComponent=(props)=>{
    const {name, value} = props;
    return <>
    <InfoContainer>
        <InfoIcon src={WeatherInfoIcons[name]}/>
        <InfoData>
        <span>{value}</span>{name}
        </InfoData>
    </InfoContainer>
    </>
}
const WeatherComponent = (props) => {
    const {weather} = props;
    const temp = Math.floor(weather?.main?.temp-273);
    const isDay = weather?.weather[0].icon?.includes("d");
    const windSpeed = Math.round((weather?.wind?.speed*3600/1000)*100)/100;
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp*1000).getMinutes()}`
    }
    return (
        <>
        <WeatherHeader>
            <WeatherCondition><span>{temp} &deg; C </span>{weather?.weather[0].main}</WeatherCondition>
            <Weatherlogo src='/icons/perfect-day.svg'/>
        </WeatherHeader>
        <WeatherLocation>{`${weather?.name}, ${weather?.sys?.country}`}</WeatherLocation>
        <WeatherInfoContainer>
            <WeatherInfoComponent name={isDay? "Sunset": "Sunrise"} value={getTime(weather?.sys[isDay? "sunset" : "sunrise"])}/>
            <WeatherInfoComponent name="Humidity" value={weather?.main?.humidity+" %"}/>
            <WeatherInfoComponent name="Wind" value={windSpeed+" km/h"}/>
            <WeatherInfoComponent name="Pressure" value={weather?.main?.pressure+" mb"}/>
        </WeatherInfoContainer>
        </>
    )
}
export default WeatherComponent;