/*********************************************************
*Created by: Alexandra
*
*Description: login page
*
**********************************************************/

module.exports = (function (checkBottomButtons){
	checkBottomButtons.checkButtons = function (URL){
		//1---deschidem pagina
		browser.get(URL);
		
		//2---facem scoll pana la butonul Jobs
		
		checkBottomButtons.scrollElemFinderIntoView(checkBottomButtons.jobsButton);
		
		//3---verificam ca exista butonul Jobs
		expect(checkBottomButtons.aboutJobsPresent()).toBeTruthy();
		
		//4---facem click pe butonul Jobs
		checkBottomButtons.jobsButtonClick();
		
		//5---checpoint jobs
		expect(checkBottomButtons.jobsSignVerify()).toEqual('Jobs');
		
		browser.sleep(2000);
		
		//6---facem scoll pana la butonul Tour
		
		checkBottomButtons.scrollElemFinderIntoView(checkBottomButtons.tourButton);
		
		//7---verificam ca exista butonul Tour
		expect(checkBottomButtons.tourButtonPresent()).toBeTruthy();
		
		//8---facem click pe butonul Tour
		checkBottomButtons.tourButtonClick();
		
		//9---checpoint Tour
		expect(checkBottomButtons.tourSignVerify()).toEqual('Tour');
		
		browser.sleep(2000);
		
		//10---facem scoll pana la butonul The Dairy
		
		checkBottomButtons.scrollElemFinderIntoView(checkBottomButtons.theDairyButton);
		
		//11---verificam ca exista butonul The Dairy
		expect(checkBottomButtons.theDairyButtonPresent()).toBeTruthy();
		
		//12---facem click pe butonul The Dairy
		checkBottomButtons.theDairyButtonClick();
		
		//13---checpoint The Dairy
		expect(checkBottomButtons.theDairySignVerify()).toEqual('The Dairy');
		
		browser.sleep(2000);
		
		//10---facem scoll pana la butonul Tips and Tricks
		
		checkBottomButtons.scrollElemFinderIntoView(checkBottomButtons.tipsAndTricksButton);
		
		//11---verificam ca exista butonul Tips and Tricksy
		expect(checkBottomButtons.tipsAndTricksButtonPresent()).toBeTruthy();
		
		//12---facem click pe butonul Tips and Tricks
		checkBottomButtons.tipsAndTricksButtonClick();
		
		//13---checpoint Tips and Tricks
		expect(checkBottomButtons.tipsAndTricksSignVerify()).toEqual('Tips & Tricks');
		
		browser.sleep(2000);
		
		//14---clik Remember the milk logo
		
		checkBottomButtons.clickRememberTheMilkLogo();
	};
	

	return checkBottomButtons;
})(require ('..//02.Functions/basePageObj.js'));