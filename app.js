// let fetch = require( 'node-fetch');
import fetch from 'node-fetch';

export var dog = {
    sound:'barkkk',
    noise(sound){ return this.sound}
}


export var cat = {
    sound:'meoww',
    noise(sound){return this.sound}
}

export var data = {
    url:'https://jsonplaceholder.typicode.com/posts/1',
    api(url){
        return {} 
        // fetch(url)
        // .then(response => response.json())
    }
}