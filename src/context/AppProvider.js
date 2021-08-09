import Loading from 'components/Loading';
import React, { createContext, useEffect, useState } from 'react';
import { BASE_URL } from 'utils/constant';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const { REACT_APP_API_KEY } = process.env;
    const [city, setCity] = useState('Ho Chi Minh');
    const [data, setData] = useState(null);

    useEffect(() => {
        const url = `${BASE_URL}?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, [city, REACT_APP_API_KEY]);

    return (
        <AppContext.Provider value={{ city, setCity, data }}>
            {data ? children : <Loading />}
        </AppContext.Provider>
    );
};

export default AppProvider;
