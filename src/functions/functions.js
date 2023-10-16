import { months } from '../constans/constans';

export const formateDate = (date) => {
    const arr = date.split('-');

    let num = arr[2][0] === '0' ? arr[2][1] : arr[2]; // убираем первый 0 из чисел до 10
    let month;

    for (let key in months){
        if(key === String(arr[1])){
            month = months[key] 
        }
    };

    return num + ' ' + month // приводим дату из формата 2021-01-24 в 24 января
}

export const formateNum = num => Math.ceil(num) === '-0' ? '0' : Math.ceil(num); // огругление без запятых 

export const formateNumToFixed = num => (num.toFixed(1)).replace('.', ','); // огругление до одного знака после запятой