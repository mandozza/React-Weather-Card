import React from 'react';
import styled from 'styled-components';
import Location from './location';
import Icon from './Icon';
import WeatherDetails from './WeatherDetails'




const WeatherCard = ({country, city, temp, condition}) => {
  const temp_low = 12;
  const temp_high = 40;
  let temp_range = temp_high - temp_low;
  let highColor = 0;
  let lowColor = 0;
  let bg = null;

  if ( temp > 12 ) {
    highColor = (1- (temp - temp_low) / temp_range) * 255;
    lowColor =  highColor -150;
    bg = `linear-gradient(to top, rgb(255,${highColor},0),rgb(255,${lowColor},0))`;
  } else {
    highColor = (1- (temp + 20) / 32) * 255;
    lowColor =  highColor -150;
    bg = `linear-gradient(to top, rgb(0,${highColor},255),rgb(0,${lowColor},255))`;
  }


  const Card = styled.div`
  margin: 0 auto;
  background: ${bg};
  width: 240px;
  height: 200px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding:30px;
  border-radius: 12px;
  color:#FFF;
  
`;

    return ( 
        <Card>
            <Location city={city} country={country}/>
            <Icon condition={condition}/>
            <WeatherDetails temp={temp} condition={condition}/>
        </Card>
     );
}
 
export default WeatherCard;