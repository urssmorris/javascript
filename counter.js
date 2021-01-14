let counter = 0;



//Count template
function count(){
    counter++;
    document.querySelector('h1').innerHTML = counter;

//template
if (counter % 10 === 0){
    alert(`Count is now ${counter}`); // ` = allt gr + }
    }
}

//event listener - functional programing (functions as values)
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').onclick = count;
});
