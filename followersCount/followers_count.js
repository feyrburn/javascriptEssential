let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById("countDisplay").innerText = count;
}

function checkCountValue(){
    if(count === 10){
        alert("Your instagram post gained 10 followers");
    } else if(count === 20){
        alert("Your instagram post gained 20 followers");
    }
}