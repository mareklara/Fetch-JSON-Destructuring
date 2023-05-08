const header = document.querySelector(".packages-info");

const getPackages = async () =>{
    try{
        const res = await fetch("data.json");
        if (!res.ok){
            throw {ok: false, msg: "Error 404"};
        }
        const data = await res.json();
        data.forEach((item) =>{
            header.innerHTML += Card(item)
        });
    } catch(error){
        console.log(error)
    }
}
getPackages()

function Card({name, info, price, subInfo}){
    return `<div class="card my-2">
    <div class="card-body">
        <h3 class="card-title">${name.toUpperCase()}</h3>
        <p class="card-text">${info}.</p>
        <h3 class="cardPrice"> ${price}</h3>
        <p class="subInfo"> ${subInfo}</p>
        <a href="#" class="btn">Buy Now</a>
    </div>
    </div>`
}
Card()