import { DIRECTIONS } from './constant';

export const convertToISOString = (dt, timezone) => {
    return new Date((dt + timezone) * 1000).toISOString();
};

export const getTime = (isoString) => {
    const time = new Date(isoString);
    return `${formatDate(time.getUTCHours())}:${time.getUTCMinutes()}`;
};

export const formatDate = (number) => {
    if (number < 10) return '0' + number;
    return number;
};

export const degToCompass = (deg) => {
    const val = Math.round(deg / 22.5 + 0.5);
    return DIRECTIONS[val % 16];
};
