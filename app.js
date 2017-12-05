import fetch from 'node-fetch';
import {result} from './results/api.js';
import fs from 'fs';

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
        return result
        // fetch(url)
        // .then(response => response.json())
    }
}

console.log(data);