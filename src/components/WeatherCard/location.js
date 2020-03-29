import React from 'react';
import styled from 'styled-components';

const LocationWrapper = styled.div`
text-align:center;
`

const City = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 28px;
`

const Country = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 20px;
  margin-top: -10px;
`

const Location = (props) => {
    return ( 
        <LocationWrapper>
            <City>{props.city}</City>
            <Country>{props.country}</Country>
        </LocationWrapper> );
}
 
export default Location;