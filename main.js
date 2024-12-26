const form= document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === " " || height<0 || isNaN(height)){
        alert("Please give a valid height in cm")
    }else if(weight === " " || weight<0 || isNaN(weight)){
        alert("Please give a valid weight in kg")
    }else{
        const BMI = (weight /((height*height)/ 10000)).toFixed(2);
        results.innerHTML = `<span>${BMI}</span>`
    }

    
})