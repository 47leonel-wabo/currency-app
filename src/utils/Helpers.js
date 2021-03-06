/*
    Fetch error helper
    param: object
 */

export const handleResponse = (response) => {
    return response.json().then((json) => {
        return response.ok ? json : Promise.reject(json);
    })
}

export const API_BASE_URL = 'https://api.udilia.com/coins/v1'

export function renderPercentageArrow(percentage) {
    if (percentage > 0) {
        return <span style={{color: 'green'}}>{percentage} % &uarr;</span>
    } else {
        return <span style={{color: 'red'}}>{percentage} % &darr; </span>
    }
}
