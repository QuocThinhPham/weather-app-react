import React, { useContext, useState } from 'react';
import { AppContext } from 'context/AppProvider';

const Search = (props) => {
    const { setCity } = useContext(AppContext);
    const [value, setValue] = useState('');

    return (
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
            {...props}
        />
    );
};

export default Search;
