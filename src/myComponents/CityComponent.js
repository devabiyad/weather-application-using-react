import styled from "styled-components";
const WeatherLogo = styled.img`
width: 140px;
height: 140px;
margin: 10px 0px 60px 0px;
`;
const CityHeader = styled.span`
font-weight: 1.2em;
text-align: center;
`;
const SearchCity = styled.form`
display: flex;
flex-direction: row;
border: none;
border-radius: 5px;
margin: 20px;

& input{
    padding 10px 20px;
    font-size: 1em;
    font-family: 'Montserrat', sans-serif;
    border: none;
    outline:none;
    border-radius: 10px;
}
& button{
    padding 10px 20px;
    font-family: 'Montserrat', sans-serif;
    font-size 1em;
    font-weight: 600;
    color: white;
    background-color: rgb(255, 68, 0);
    border: none;
    border-radius: 10px;
    margin-left: 5px;
    cursor: pointer;
    transition: 100ms;
}
& button:hover{
    background-color: red;
}
`;
const CityComponent = (props) => {
    const {updateCity, fetchWeather}=props;
    return(
    <>
        <WeatherLogo src='../icons/the-sun.svg'/>
        <CityHeader>Find Weather Data of your city</CityHeader>
        <SearchCity onSubmit={fetchWeather}>
            <input type='text' placeholder='Enter City Name..' onChange={(e)=>updateCity(e.target.value)}/>
            <button type='submit'>Search</button>
        </SearchCity>
    </>
    )
    
}
export default CityComponent;