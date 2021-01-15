//let counter = 0;

//Storage - check if value, if not set it
if (!localStorage.getItem("counter")){
    localStorage.setItem("counter", 0);
}


//Count template
function count(){

    //get localstorage values
    let counter = localStorage.getItem("counter");

    counter++;
    document.querySelector('h1').innerHTML = counter;

    //setting new value in storage
    localStorage.setItem("counter", counter);


//template
if (counter % 10 === 0){
    alert(`Count is now ${counter}`); // ` = allt gr + }
    }
}

//event listener - functional programing (functions as values)
document.addEventListener('DOMContentLoaded', function(){

    //update h1 whit counter value
    document.querySelector("h1").innerHTML = localStorage.getItem("counter");

    document.querySelector('button').onclick = count;

    //create interval
    //setInterval(count, 1000); //1seg
});
