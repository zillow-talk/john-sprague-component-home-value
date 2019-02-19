import React from 'react';
import styled from 'styled-components';

const PropertyCard = styled.div`
  border-top: solid 1px #eee;
  padding-top: 20px;
  padding-bottom: 20px;
  white-space: nowrap;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5;
  color: #444;

  :after, :before {
    bow-sizing: border-box;
  }
`;

<<<<<<< HEAD
const PropertyDetailSection = styled.div``;


const HomeStatus = styled.h5``;

const RecentlySoldIcon = styled.span`
=======
const PropertyDetailSection = styled.div`
padding-top: 8px;
`;

const PropertyImage = styled.img`
box-sizing: border-box;
width: 150px;
height: 112px;
background-size: 150px 112px
padding-right: 20px
padding-top: -5px;
`;

const HomeStatus = styled.span`

`;

const RecentlySoldIcon = styled.span`
padding-top: 1px;
background-color: #fce013;
height: .75em;
width: .75em;
border-radius: 50%;
display: inline-block;
`;

const RecentlySold = styled.span`
>>>>>>> render-images
  font-size: 13px;
  line-height: 15px;
  font-weight: 700;
`;

<<<<<<< HEAD
=======

>>>>>>> render-images
const Price = styled.div`
  font-size: 28px;
  line-height: 40px;
  font-weight: 400;
`;

const PropertyDetailedInfo = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
`;

const PropertyAddress = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  color: #0074e4;
  : hover {
    color: #62aef7;
  }
`;

const PropertySqftCalculation = styled.span`
  flex: 3;
  text-align: right
  padding-top: 30px;
  font-size: 20px;
  line-height: 15px;
  font-weight: 400;
`;

<<<<<<< HEAD
var LocalHomesItem = ({homeData}) => {
  return (
    <div>
      <PropertyCard>
        <PropertyDetailSection>
          <HomeStatus>
            <RecentlySoldIcon>
              <div>
                SOLD ({homeData.sellDate})
              </div>
            </RecentlySoldIcon>
=======
var LocalHomesItem = ({homeData, photo}) => {
  return (
    <div>
      <PropertyCard>
      <PropertyImage src={photo.url}></PropertyImage>
        <PropertyDetailSection>
          <HomeStatus>
            <RecentlySoldIcon></RecentlySoldIcon>
            <RecentlySold> SOLD ({homeData.sellDate})</RecentlySold>
>>>>>>> render-images
          </HomeStatus>
          <Price>
            {`$${homeData.sellPrice}`}
          </Price>
          <PropertyDetailedInfo>
            {`${homeData.beds} bds - ${homeData.baths} ba - 1555 sqft`}                          
          </PropertyDetailedInfo>
          <PropertyAddress>
            {homeData.streetAddress}
          </PropertyAddress>
        </PropertyDetailSection>
        <PropertySqftCalculation>
          {`${homeData.saleToList}%`}
        </PropertySqftCalculation>
      </PropertyCard>
    </div>
  );
};


export default LocalHomesItem; 