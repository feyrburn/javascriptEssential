let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function resetCount(){
    count = 0;
    displayCount();
    alert("Follower count has been reset to 0");
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