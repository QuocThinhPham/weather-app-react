import { AppContext } from 'context/AppProvider';
import React, { useContext } from 'react';

const Weather = () => {
    const { data } = useContext(AppContext);
    const {
        name,
        weather,
        main: { temp, feels_like },
        sys: { country },
    } = data;

    return (
        <div className="weather-left p-30">
            <h3 className="weather-location">{`${name}, ${country}`}</h3>
            <p className="weather-desc">{weather[0].description}</p>
            <div className="block-img">
                <div style={{ display: 'block', maxWidth: '100%' }}>
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                        style={{ display: 'block', maxWidth: '100%' }}
                        alt=""
                    />
                </div>
                <img
                    src={`${window.location.origin}/assets/icons/${weather[0].icon}.svg`}
                    alt="Weather Icons"
                />
            </div>
            <h1 className="weather-temp">{Math.round(temp)}&deg;C</h1>
            <span className="weather-feels-like">
                Feels like {Math.round(feels_like)}&deg;C
            </span>
        </div>
    );
};

export default Weather;
