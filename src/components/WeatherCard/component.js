import React from 'react';
import styled from 'styled-components';
import Location from './location';
import Icon from './Icon';
import WeatherDetails from './WeatherDetails'




const WeatherCard = (props) => {

  const temp_low = 12;
  const temp_high = 40;
  let temp_range = temp_high - temp_low;
  let highColor = (1- (props.temp - temp_low) / temp_range) * 255;
  let lowColor =  highColor -150;




  const Card = styled.div`
  margin: 0 auto;
  background: linear-gradient(to top, rgb(255,${highColor},0),rgb(255,${lowColor},0));
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
            <Location city="Halifax" country="Canada"/>
            <Icon/>
            <WeatherDetails/>
        </Card>
     );
}
 
export default WeatherCard;