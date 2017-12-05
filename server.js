var fetch = require('node-fetch');
let url='https://jsonplaceholder.typicode.com/posts/1';

fetch('').then(response => { console.log(response.json())})

async function start(){

    var data =  await getPostData(url);
    console.log(data);
}



async function getPostData(url){
    var rawData = await fetch(url);
    var jsonData = rawData.json();
    return jsonData
}