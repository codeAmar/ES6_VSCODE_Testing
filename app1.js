'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.data = exports.cat = exports.dog = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _api = require('./results/api.js');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dog = exports.dog = {
    sound: 'barkkk',
    noise: function noise(sound) {
        return this.sound;
    }
};

var cat = exports.cat = {
    sound: 'meoww',
    noise: function noise(sound) {
        return this.sound;
    }
};

var data = exports.data = {
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    api: function api(url) {
        return _api.result;
        // fetch(url)
        // .then(response => response.json())
    }
};

console.log(data);
