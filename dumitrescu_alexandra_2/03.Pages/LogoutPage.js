/*********************************************************
*Created by: Alexandra
*
*Description: login page
*
**********************************************************/

module.exports = (function(logoutPage){
	
	//-----------------------------------------------------------------------
	logoutPage.logoutUser = function() {
		logoutPage.signOutButton();
		
		//loginPage.clickSettingsButton();
		
		//browser.sleep(3000);

		browser.sleep(3000);
		//exista butonul log in
		expect (logoutPage.loginAgainButtonPresent).toBeTruthy();
		
		browser.sleep(3000);
	};//end function logoutUser
	
	
	logoutPage.everyTimeLogout = function() {
		//cick sign out
		logoutPage.clickSettingsButton();
		//click arrow
		logoutPage.signOutButton();
		
		//exista butonul log in
		expect (logoutPage.loginAgainButtonPresent).toBeTruthy();
		
		browser.sleep(3000);
	};//end function everyTimeLogout
	
	return logoutPage
	})(require('../02.Functions/basePageObj.js'));