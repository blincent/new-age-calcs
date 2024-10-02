const outputYear = document.querySelector('.input-group');
const outputMonth = document.querySelector('input-group');
const outputDay = document.querySelector('input-group');
const submitBtn =document.querySelector('.calculate-btn');

// 
let inValid = false;
const inputYear = document.querySelector('#year');
const inputMonth = document.querySelector('month');
const inputDay = document.querySelector('day');

// error
const errorYear = document.querySelector('.error-year');
const errorMonth = document.querySelector('.error-month');
const errorDay = document.querySelector('.error-day');

inputDay.addEventListener("input", (e)=>{
    if(+inputDay.value > 31){
        errorDay.textContent = 'Must be a valid date';
        inValid = false;
        return;
    }else{
        inValid = true;
        errorDay.textContent = "";
    }
    if(+inputDay.value === 0){
        inValid = false;
        errorDay.textContent = 'This field is required';
        inValid=false;
        return;
    }else{
        errorDay.textContent = "";
    }
})