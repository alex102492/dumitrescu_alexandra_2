/*********************************************************
*Created by: Alexandra
*
*Description: login page
*
**********************************************************/

describe ('spec_LoginScript.js', function(){
	var loginPage = require('../03.Pages/LoginPage.js');
	var testData = require ('../04.InputData/Login_InputData.json');
	    testData.forEach (function(data){


	
	 //scenariu negativ
	//fit - singurul it pe care il va rula
	it ('login unsuccesfully - blank username', function(){
		
		loginPage.loginNoSuccess(data.URL, "",data.password);
		
	}); //inchide it
	
	it ('login unsuccesfully - blank password', function(){
		
		loginPage.loginNoSuccess(data.URL, data.emailUsername,"");
		
	}); //inchide it
	
	it ('login unsuccesfully - blank username & password', function(){
		
		loginPage.loginNoSuccess(data.URL, "","");
		
	}); //inchide it
	
	it ('login unsuccesfully - invalid username', function(){
		
		loginPage.loginNoSuccess(data.URL, data.wrongEmailUsername,data.password);
		
	}); //inchide it
	
	it ('login unsuccesfully - invalid password', function(){
		
		loginPage.loginNoSuccess(data.URL, data.emailUsername,data.wrongPassword);
		
	}); //inchide it
	
	it ('login unsuccesfully - invalid username & password', function(){
		
		loginPage.loginNoSuccess(data.URL, data.wrongEmailUsername,data.wrongPassword);
		
	}); //inchide it
	
	//scenariu pozitiv
	fit ('login succesfully', function(){
		
		loginPage.loginSuccess(data.URL, data.emailUsername, data.password, data.emailUsername);	//de cate ori e nevoie de o variabila trebuie pusa	
	    console.log("Logarea s-a efectuat cu success");
	    
	});//inchide it
	    });//inchide functia
//	
	
});