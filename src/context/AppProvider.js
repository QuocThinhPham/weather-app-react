import Loading from 'components/Loading';
import React, { createContext, useEffect, useState } from 'react';
import { BASE_URL } from 'utils/constant';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const { REACT_APP_API_KEY } = process.env;
    const [city, setCity] = useState('Ho Chi Minh');
    const [data, setData] = useState(null);

    const getData = async (url) => {
        const response = await fetch(url);

        if (response.status === 200) {
            const responseJSON = await response.json();
            setData(responseJSON);
        } else if (response.status === 404) {
            console.log('404: Not Found');
            setData(null);
        }
    };

    useEffect(() => {
        const url = `${BASE_URL}?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
        getData(url);
    }, [city, REACT_APP_API_KEY]);

    return (
        <AppContext.Provider value={{ city, setCity, data }}>
            {data ? children : <Loading />}
        </AppContext.Provider>
    );
};

export default AppProvider;
