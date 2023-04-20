//1. Fetch API para consumir datos desde un txt...

//2. Fetch API para consumir un JSON (Objeto)
let btnLoader = document.querySelector("#loadJSON")
btnLoader.addEventListener(`click`, getCamper)
let btnTribus = document.querySelector("#loadJSONArray")
btnTribus.addEventListener(`click`,getTribu)
let bntApi= document.querySelector("#loadAPI")
bntApi.addEventListener(`click`, getApi)

function getCamper(){
    let url = "data/campers.json"
    fetch(url)  
    .then(result =>{
       /*  console.log(result); */
       return result.json()
    })
    .then(readData=>{
       /*  console.log(readData); */
        printHTML(readData)
    })
    .catch(error =>{
        console.log(error);
    })
}
function printHTML({id, nombre, tel, ingles}){
    let contenido=  document.querySelector("#contenido")
    contenido.innerHTML=`
    <p>${id}</p>
    <p>${nombre}</p>
    <p>${tel}</p>
    <p>${ingles}</p>
    `
}
//3. Fetch API para consumir datos de un JSON (Array)
function getTribu(){
    let url="data/tribus.json"
    fetch(url)
    .then(result =>{
        return result.json()
    })
    .then(readData=>{
        console.log(readData);
        showHTML(readData)
    })
    .catch(error =>{
        console.log(error);
    })
}
function showHTML(tribus){
    let cont = document.querySelector("#tribus")
    let plantilla = ""
    tribus.forEach(tribu=>{
        let {id, nombre, nombreLider, puntos} = tribu
        plantilla +=`
        <p>${id}</p>
        <p>${nombre}</p>
        <p>${nombreLider}</p>
        <p>${puntos}</p>`
    })
    cont.innerHTML= plantilla
}
//4.  FetchAPI para consumir recursos desde una API PUBLICA (internet)
function getApi(){
    let url="data/images.json"
    fetch(url)
    .then(result =>{
        return result.json()
    })
    .then(readData=>{
        console.log(readData);
        showIMG(readData)
    })
    .catch(error =>{
        console.log(error);
    })
}
function showIMG(image){
    let cont = document.querySelector("#cards")
    let plantilla = ""
    image.forEach(img=>{
        let {id, author, width, height, url, download_url} = img
        plantilla +=`
        <card style="padding-top: 15px;">
        <p>numero ${id}</p>
        <img src="${download_url}" style="display:flex; width:${width}px; height: ${height}px">
        <p>Hecha por${author}</p>
        </card>
    
        `
    })
    cont.innerHTML= plantilla
}