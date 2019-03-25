/*********************************************************
*Created by: Alexandra
*
*Description: login page
*
**********************************************************/

module.exports = (function(loginPage){
	
	//-----------------------------------------------------------------------
	loginPage.loginSuccess = function(URL, emailUsername, password, email) {
		//deschidem pagina
		browser.get(URL);
		
		//click pe log in
		loginPage.loginButtonClick();
		
		//browser.sleep(3000);
		
		//fill email or username
		loginPage.fillUsernameField(emailUsername);
		
		//browser.sleep(3000);
		
		//fill password
		loginPage.fillPasswordField(password);
		
		//browser.sleep(3000);
		
		//debifam stay login
		loginPage.uncheckStayLogin();
		
		//browser.sleep(3000);
		
		//click login
		loginPage.pressLoginButton();
		
		//browser.sleep(3000);
		
		//verificam ca ne-am logat
		
		//browser.waitForAngular();         //asteapta pt incarcarea paginilor de tip Angular
		browser.waitForAngularEnabled(false);  
		//browser.sleep(10000);
		//browser.refresh(); //face refresh la pagina
	    //browser.ignoreSynchronization=true; 
	    browser.sleep(2000);
	    
	    //Click Settings
		loginPage.clickSettingsButton();
		
		browser.sleep(3000);
		
		expect(loginPage.verifyEmail()).toEqual(email);//se asteapta ca elementul din functie sa fie egal cu parametrul email

		browser.sleep(3000);
		
		
	};//end function loginSuccess
	
	//-----------------------------------------------------------------------
	
	loginPage.loginNoSuccess = function (URL, wrongEmailUsername, wrongPassword){
		//deschidem pagina
		browser.get(URL);
		
		browser.sleep(3000);
		//click pe log in
		loginPage.loginButtonClick();
		
		browser.sleep(3000);
		//fill email or username
		loginPage.fillUsernameField(wrongEmailUsername);
		
		//fill password
		loginPage.fillPasswordField(wrongPassword);
		
		//debifam stay login
		loginPage.uncheckStayLogin();
			
		//browser.sleep(30000);
		console.log("Inainte sa apese login");
		//click login
		loginPage.pressLoginButton();
		console.log("A apasat login");
		
		browser.sleep(3000);
		//Verify login error message
		expect(loginPage.errorMessageLogin()).toBeTruthy();
		//expect(loginPage.errorMessageLogin()).toBeFalsy();
		
		//loginPage.errorMessageLogin();
		
		browser.sleep(3000);
		//console.log(loginPage.errorMessageLogin());
	};//end function loginNoSuccess
	
	////
	loginPage.everyTimeLogin = function (URL,emailUsername,password){
		//deschidem pagina
		browser.get(URL);
		
		//click pe log in
		loginPage.loginButtonClick();
		
		//fill email or username
		loginPage.fillUsernameField(emailUsername);
		
		//fill password
		loginPage.fillPasswordField(password);
		
		//debifam stay login
		loginPage.uncheckStayLogin();
		
		//click login
		loginPage.pressLoginButton();
		
		browser.ignoreSynchronization=true; 		
		browser.sleep (3000);
	};
	
return loginPage
})(require('../02.Functions/basePageObj.js'));