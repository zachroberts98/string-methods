

function highlight() {
    let word = document.querySelector("input").value;
    let p = document.querySelector("p").textContent; 
    
    for( let i = 0; i < p.length; i++) {
        if(p.includes(word)) {
        document.body.style.color = "green";
        } else {
        document.body.style.color = "red"
        }
    };
    

    
    return false;

};

//I want to search the paragraph for my value and highlight matches


    
