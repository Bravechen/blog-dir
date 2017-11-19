let Browser = require('zombie');
let assert = require('chai').assert;

let browser;

suite('Cross-Page Tests',function(){
  setup(function(){
    browser = new Browser();
  });

  test('requesting a group rate quote from the hood river tour page' + 'should populate the referrer field',function(done){
    let referrer = 'http://localhost:3000/tours/hood-river';
    let page = 'hood-river';
    browser.visit(referrer,function(){
      browser.clickLink('.requestGroupRate',function(){
        let value = browser.field('referrer').value;
        assert(value === referrer || value === page);
        done();
      });
    });
  });

  test('requesting a group rate from the oregon coast tour page should '+ 'populate the referrer field',function(done){
    let referrer = 'http://localhost:3000/tours/oregon-coast';
    let page = 'oregon-coast';
    browser.visit(referrer,function(){
      browser.clickLink('.requestGroupRate',function(){
        let value = browser.field('referrer').value;
        assert(value === referrer || value === page);
        done();
      });
    });
  });

  test('visiting the "request group rate" page dirctly should result ' + 'in an empty referrer field',function(done){
    browser.visit('http://localhost:3000/tours/request-group-rate ',function(){
      assert(browser.field('referrer').value === '');
      done();
    });
  });

});