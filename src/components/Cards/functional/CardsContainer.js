import React, { useMemo } from 'react';
import CardUI from '../ui/CardUI';
import CardsUI from "../ui/CardsUI";
import './Cards.css';
import { useCardsStyles } from '../../../styles/useCardsStyles';
import { GET_WEATHER_ICONS_LINK } from '../../../constans/constans';

const CardsContainer = ({ data, city, isLoading}) => {

    const classes = useCardsStyles();

    const cards = useMemo(()=>{
        return data.map( el => <CardUI
            key={el.datetime}
            temp={el.temp}
            date={el.datetime}
            description={el.weather.description}
            icon={GET_WEATHER_ICONS_LINK + `${el.weather.icon}.png`}
            pres={el.pres}
            humidity={el.rh}
            clouds={el.clouds}
            wind={el.wind_spd}
            classes={classes} />)
    }, [data, classes]) 

    return <CardsUI city={city} cards={cards} isLoading={isLoading} />
}

export default CardsContainer;
