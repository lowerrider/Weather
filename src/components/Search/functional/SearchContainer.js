import React, { useEffect, useState } from "react";
import SearchUI from "../ui/SearchUI";
import { API } from "../../../api/api";
import "./Search.css";
import { useSearchStyles } from "../../../styles/useSearchStyles";
import { formateDate, formateNum, formateNumToFixed } from "../../../functions/functions";
import { PRESSURE_CONST } from "../../../constans/constans";

const SearchContainer = ({ setData, setCity, setIsLoading }) => {

    const classes = useSearchStyles();

    const [searchInput, setSearchInput] = useState('');
    const [showError, setShowError] = useState(false);
    const [fullScreen, setFullScreen] = useState(true);
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setSearchInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchInput === '') {
            setFullScreen(true);
            setShowError(true);
            setSearchInput('');
            setData(undefined);
        }
        else {
            setShowError(false);
            setQuery(searchInput);
        }
    };

    useEffect(() => {
        let didCancel = false; // abort data fetching 

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result = await API.get('/', {
                    params: {
                        city: query
                    }
                })
                if(!didCancel){
                    if (result.status === 204) {
                        setShowError(true);
                        setFullScreen(true);
                    }
                    else{
                        setFullScreen(false);
                        setCity(result.data.city_name);
                        setData(result.data.data.map(el => {
                            return {
                              ...el,
                              temp: formateNum(el.temp),
                              datetime: formateDate(el.datetime),
                              pres: formateNum(el.pres / PRESSURE_CONST),
                              wind_spd: formateNumToFixed(el.wind_spd)
                            }
                          }));
                        setSearchInput('');
                    }
                }
                setIsLoading(false);
            } catch (er) {console.error('error', er);} 
            setIsLoading(false);
        }
        query && fetchData(); 
        
        return () => {
            didCancel = true; 
        }
    }, [query]);
    
    return <SearchUI
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchInput={searchInput}
        showError={showError}
        classes={classes} 
        fullScreen = {fullScreen}/>;
}

export default SearchContainer;
