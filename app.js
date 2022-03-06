 // CXNvAdtWc35hFJrALEUAgBUT6kiM1LqS




   

 function getProductData() {

    try {
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=CXNvAdtWc35hFJrALEUAgBUT6kiM1LqS&offset=1&limit=20`)
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


/*
let inputData =  document.getElementById("takeinput");
let dropDown = document.getElementById("searchresult");
let timerId;


searchInput.oninput = () => {
deBounce(showData, 1000);
};

function deBounce(func, delay){
if(timerId){
clearTimeout(timerId);
}
timerId = setTimeout(function(){
func();
}, delay);
}
*/
