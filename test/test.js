var assert = require('assert');
var expect = require('chai').expect
import {dog} from '../app';

describe('unit testing' ,
  ()=>{
    it('Which sound does the dog make',
      ()=>{
        expect(
          dog.noise()
        ).to.equal('barkkk')
      
      })
      }
);