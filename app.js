  let key = "CXNvAdtWc35hFJrALEUAgBUT6kiM1LqS"


 function getProductData() {

    try {
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${key}&offset=1&limit=20`)
            .then((e) => e.json())
            .then((res) => {
                console.log("mydata", res.data);
                viewProducts(res.data)

            })
    }
    catch (e) {
        console.log(e.message);
    }
}


getProductData();

let productDiv = document.getElementById("productDiv");


function viewProducts(datas) {

    productDiv.innerHTML = null;

    datas.forEach((e) => {

        let imgCard = document.createElement("div");
        imgCard.setAttribute("class", "imgCard")

        let pic = document.createElement("img");
        pic.src = e.images.original.url;
        pic.setAttribute("class", "picIcon")

        let title = document.createElement("div");
        let p = document.createElement("p");
        p.textContent = e.title;
        p.setAttribute("class", "ps")

        title.append(p)

        title.setAttribute("class", "picTitle");



        imgCard.append(pic, title)

        productDiv.append(imgCard)

    });

}



let bunny = document.getElementById("bunny");
let imgur13 = document.getElementById("imgur13");
let vintage = document.getElementById("vintage");
let pokemon  = document.getElementById("pokemon");
let history  = document.getElementById("history");
let science = document.getElementById("science");
let  popular = document.getElementById("popular");
let gaming  = document.getElementById("gaming");
let memes = document.getElementById("memes");


bunny.onclick = () => {
    
    let x = "bunny";
    showResultData(x);
}

imgur13.onclick = () => {
    
    let x = "imgur";
    showResultData(x);
}

vintage.onclick = () => {
    
    let x = "vintage";
    showResultData(x);
}


pokemon.onclick = () => {
    
    let x = "pokemon";
    showResultData(x);
}


history.onclick = () => {
    
    let x = "history";
    showResultData(x);
}


science.onclick = () => {
    
    let x = "science";
    showResultData(x);
}


popular.onclick = () => {
    
    let x = "popular";
    showResultData(x);
}

gaming.onclick = () => {
    
    let x = "gaming";
    showResultData(x);
}

memes.onclick = () => {
    
    let x = "memes";
    showResultData(x);
}





//-------------------------------------------------------- search & debouncing



let inputData = document.getElementById("takeinput");
let dropDown = document.getElementById("searchresult");


let timerId;


inputData.oninput = () => {
    let res = inputData.value;
    deBounce(findResult(res), 2000);
};



function findResult(q) {
    try {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&api_key=${key}&limit=3`)
            .then((e) => e.json())
            .then((res) => {
                dropdownResult(res.data);
            })
    }
    catch (e) {
        console.log(e.message);
    }
}




function dropdownResult(data) {
    dropDown.innerHTML = null;

    data.forEach((res) => {
        let foundRes = document.createElement("div");
        foundRes.setAttribute("class", "foundRes");

        let foundTitle = document.createElement("p");
        foundTitle.textContent = res.title;


        foundRes.onclick = () => {
            dropDown.innerHTML = null;
            let query = inputData.value;
            showResultData(query);
        }
        foundRes.append(foundTitle);
       
        dropDown.append(foundRes);
    });
}



function showResultData(q) {
    try {
         fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&api_key=${key}&limit=20`)
            .then((e) =>
             e.json())
            .then((res) => {
                inputData.value = "";
                console.log("searchdata" , res.data)
                viewProducts(res.data);
            })
    }
    catch (e) {
        console.log(e.message);
    }
}



function deBounce(func, delay) {
    if (timerId) {
        clearTimeout(timerId);
    }
    timerId = setTimeout(function () {
        func();
    }, delay);
}

