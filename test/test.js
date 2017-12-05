let assert = require('assert');
let expect = require('chai').expect
let should = require('chai').should() //actually call the function

import {dog,cat,data} from '../app';


// test cases for the dog variable
describe('Dog : unit testing' ,()=>{
    it('Which sound does the dog make',()=>{

        expect(dog.noise()).to.equal('barkkk')
      
    })
    it('sound is of correct datatype',()=>{
      (dog.noise()).should.equal('barkkk')
    })
  
});

// test cases for the cat variable
describe('Cat : unit testing' ,()=>{
    it('Which sound does the Cat make',()=>{

        expect(cat.noise()).to.equal('meoww')
      
    })
    it('sound is of correct datatype',()=>{
      (cat.noise()).should.equal('meoww')
    })
  
});

// test for the fetch call

describe('Testing API calls',()=>{
  
  it('calls go to correct address',()=>{
    expect(data.url).to.equal('https://jsonplaceholder.typicode.com/posts/1');
  })

  it('get the correct response',()=>{
    expect(data.api(data.url)).to.be.an('object');
  })

  // checking the format of the api calls
  describe('response contains all the keys and values',()=>{
    it('format -> title:string',()=>{
      expect(data.api(data.url).title).to.be.a('string');
    })
    it('format -> id:number',()=>{
      expect(data.api(data.url).id).to.be.a('number');
      
    })
    it('format -> userId:number',()=>{
      expect(data.api(data.url).userId).to.be.a('number');
      
    })
    it('format -> body:string',()=>{
      expect(data.api(data.url).body).to.be.a('string');
    })
  })
  
})
