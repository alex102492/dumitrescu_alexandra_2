/*********************************************************
*Created by: Alexandra
*
*Description: login page
*
**********************************************************/

describe ('spec_CheckBottomButtonsLoginAndLogout', function (){
	var loginPage = require('../03.Pages/LoginPage.js');
	var logoutPage = require('../03.Pages/LogoutPage.js');
	var checkBottomButtonsLoginAndLogout = require('../03.Pages/CheckBottomButtonsLoginAndLogout.js');
	var testData = require ('../04.InputData/Login_InputData.json');
	    testData.forEach (function(data){
	    	it ('Check bottom buttons',function(){
	    		checkBottomButtonsLoginAndLogout.checkButtons(data.URL);
                 console.log ("Verificarea butoanelor s-a efectuat cu succes");
                 
	    		loginPage.loginSuccess(data.URL, data.emailUsername, data.password, data.emailUsername);	//de cate ori e nevoie de o variabila trebuie pusa	
	    	    console.log("Logarea s-a efectuat cu success");
	    	    
	    	    logoutPage.logoutUser();
	    	    console.log("Logoutul s-a efectuat cu success");
	    	});
	  	
	    });//close function
	
});