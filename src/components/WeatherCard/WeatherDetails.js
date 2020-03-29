import React from 'react';
import styled from 'styled-components';

const WeatherWrapper = styled.div`
    text-align: center;
`
const Temperature = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 36px;
`
const Weathertype = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 20px;
    margin-top: -30px;
`

const WeatherDetails = (props) => {
    return (  
    <WeatherWrapper>
        <Temperature>temp</Temperature>
        <Weathertype>weather type</Weathertype> 
    </WeatherWrapper>     
    );
}

export default WeatherDetails;