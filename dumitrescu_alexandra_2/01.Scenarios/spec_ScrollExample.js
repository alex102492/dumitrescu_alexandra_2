/*********************************************************
*Created by: Alexandra
*
*Description: login page
*
**********************************************************/


describe ('spec_LogoutScript.js', function(){
	var scrollExamplePage = require('../03.Pages/ScrollExamplePage.js');
	var testData = require ('../04.InputData/Login_InputData.json');
	    testData.forEach (function(data){
	    	
	    	it('Scroll examples',function(){
	    		scrollExamplePage.scrollExample(data.URL);
	    	});//inchidere it
	    	
	    });//inchide functia
		
	});
	    