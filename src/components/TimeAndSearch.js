import { AppContext } from 'context/AppProvider';
import React, { useContext } from 'react';
import { DAYS } from 'utils/constant';
import { convertToISOString, formatDate } from 'utils/services';
import Search from './Search';

const TimeAndSearch = () => {
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
            <Search />
        </div>
    );
};

export default TimeAndSearch;
