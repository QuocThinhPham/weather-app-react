import Stats from 'components/Stats';
import Weather from 'components/Weather';
import React from 'react';

export default function App() {
    return (
        <div className="weather-wrapper">
            <Weather />
            <Stats />
        </div>
    );
}
