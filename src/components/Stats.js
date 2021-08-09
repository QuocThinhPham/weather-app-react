import { AppContext } from 'context/AppProvider';
import React, { useContext } from 'react';
import { convertToISOString, degToCompass, getTime } from 'utils/services';
import StatsCard from './StatsCard';
import TimeAndSearch from './TimeAndSearch';

const Stats = () => {
    const { data } = useContext(AppContext);
    const {
        main: { humidity },
        wind: { speed, deg },
        visibility,
        sys: { sunrise, sunset },
        timezone,
    } = data;

    const stats = [
        {
            id: 1,
            name: 'Humidity',
            value: humidity,
            unit: '%',
            icon: 'humidity',
        },
        {
            id: 2,
            name: 'Wind speed',
            value: speed,
            unit: 'm/s',
            icon: 'wind',
        },
        {
            id: 3,
            name: 'Wind direction',
            value: degToCompass(deg),
            unit: null,
            icon: 'compass',
        },
        {
            id: 4,
            name: 'Visibility',
            value: visibility / 1000,
            unit: 'km',
            icon: 'binoculars',
        },
        {
            id: 5,
            name: 'Sunrise',
            value: getTime(convertToISOString(sunrise, timezone)),
            unit: null,
            icon: 'sunrise',
        },
        {
            id: 6,
            name: 'Sunset',
            value: getTime(convertToISOString(sunset, timezone)),
            unit: null,
            icon: 'sunset',
        },
    ];

    return (
        <div className="stats-wrapper p-30">
            <TimeAndSearch />
            <div className="stats-list">
                {stats.map((stat) => (
                    <StatsCard key={stat.id} stat={stat} />
                ))}
            </div>
        </div>
    );
};

export default Stats;
