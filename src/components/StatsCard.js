import React from 'react';

const StatsCard = ({ stat }) => {
    const { name, value, unit, icon } = stat;

    return (
        <div className="stats-card">
            <p>{name}</p>
            <div className="stats-card-content">
                <div className="block-img">
                    <div style={{ display: 'block', maxWidth: '100%' }}>
                        <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                            style={{ display: 'block', maxWidth: '100%' }}
                            alt=""
                        />
                    </div>
                    <img
                        src={`${window.location.origin}/assets/images/${icon}.png`}
                        alt="Weather Icons"
                    />
                </div>
                <div>
                    <h4>{value}</h4>
                    <p>{unit ? unit : ''}</p>
                </div>
            </div>
        </div>
    );
};

export default StatsCard;
