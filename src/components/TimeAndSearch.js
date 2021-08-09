import { AppContext } from 'context/AppProvider';
import React, { useContext, useState } from 'react';
import { DAYS } from 'utils/constant';
import { formatDate } from 'utils/services';
import { convertToISOString } from 'utils/services';

const TimeAndSearch = () => {
    const [value, setValue] = useState('');
    const { setCity } = useContext(AppContext);
    const {
        data: { dt, timezone },
    } = useContext(AppContext);
    const time = new Date(convertToISOString(dt, timezone));

    return (
        <div className="time-and-search">
            <h3>
                <span>Calculation Time:</span>
                {`${DAYS[time.getUTCDay()]}, ${formatDate(
                    time.getUTCHours()
                )}:${formatDate(time.getUTCMinutes())}`}
            </h3>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.code === 'Enter') {
                        setCity(value);
                        setValue('');
                    }
                }}
                className="search-input"
                placeholder="Search a city..."
            />
        </div>
    );
};

export default TimeAndSearch;
