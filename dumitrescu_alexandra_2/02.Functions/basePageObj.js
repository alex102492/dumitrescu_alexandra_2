/*********************************************************
*Created by: Alexandra
*
*Description: login page
*
**********************************************************/

module.exports = (function () {
	var that = {}; //se foloseste mai departe
	//var waitUntil = require('wait-until');
	var butonAddTask='//button[@class="b-Qn-i-Yn Um-i"]';
	//var buttonSingout='//div[@id=":2v"]';
	
	//identificare buton Login si apasare click
	that.loginButtonClick =function(){
		return element (by.xpath('/html/body/nav/div/ul[2]/li[5]/a')).click();
		
	};
	//Fill in Username/Email field
	that.fillUsernameField =function(emailUsername){
		element (by.id('username')).clear();
		return element (by.id('username')).sendKeys(emailUsername);
		//return element $(['id="username"']).sendKeys(emailUsername);
		
	};
	
	//Fill in Password
	that.fillPasswordField =function(password){
		element (by.id('password')).clear();
		return element (by.id('password')).sendKeys(password);
		
	};
	
	//Debifeaza Stay Login
	that.uncheckStayLogin =function(){
		//return element (by.xpath('/html/body/main/section/article[2]/div/form/div[3]/label')).click();
		return $('[for="remember"]').click();
	};
	
	//Apasa Login
	that.pressLoginButton =function(){
		return element (by.id('login-button')).click();
		
	};
	//Verificam ca exista butonul Settings
	that.clickSettingsButton= function(){
		//
				return element (by.xpath('/html/body/div[11]/div/div[3]/div[2]/div[3]/div/div[4]/i[2]')).click();
	};
	
	that.verifyEmail = function(){
		     return element(by.xpath('//*[@id=":2e"]/div[3]')).getText();
		
	};
	
	//Verificam mesajul de eroare la login invalid
	
	that.errorMessageLogin = function(){
		try
	    {
			return element(by.xpath('/html/body/main/section/article[2]/div/form/div[1]')).isPresent();
	        return true;
	    }
	    catch (NoSuchElementException)
	    {
	        return false;
	    }
	};
	     

	that.signOutButton = function (){
		return element(by.xpath("(//div[@class='Um-sn-Dn'])[last()]")).click();
	};
	
	that.loginAgainButtonPresent = function () {
		return element (by.xpath('/html/body/main/header/div/a')).isPresent();
};

	
    that.fillNewTaskField = function (taskName){
    	element (by.xpath('/html/body/div[11]/div/div[5]/div[3]/div/div[2]/div[7]/div[2]/div[1]/div[2]/div')).clear();
    	return element (by.xpath('/html/body/div[11]/div/div[5]/div[3]/div/div[2]/div[7]/div[2]/div[1]/div[2]/div')).sendKeys(taskName);
    };
    
    that.clickAddTask= function (){
    	return element (by.xpath (butonAddTask)).click();
    };
    
    //functie de scroll   
    that.scrollElemFinderIntoView = function (elemFinder){
    	var promise = browser.executeScript(function(elem){
    		elem.scrollIntoView(false);//false
    	},elemFinder);
    	return promise;    	
    };
    
    //click buton Jobs
    that.aboutJobsPresent = function (){
    	return element (by.xpath('/html/body/footer/div/div[2]/div[1]/ul[1]/li[3]/a')).isPresent();
    };
    
    //butonul About
    that.aboutButton= element (by.xpath('/html/body/footer/div/div[2]/div[1]/ul[1]/li[2]/a'));
    
    
    //click buton About
    that.aboutButtonClick = function (){
    	return element (by.xpath('/html/body/footer/div/div[2]/div[1]/ul[1]/li[2]/a')).click();
    };
    
    //butonul Jobs
    that.jobsButton= element (by.xpath('/html/body/footer/div/div[2]/div[1]/ul[1]/li[3]/a'));
    
    
    //verificare buton Jobs
    that.jobsButtonPresent = function (){
    	return element (by.xpath('/html/body/footer/div/div[2]/div[1]/ul[1]/li[3]/a')).isPresent();
    };
    //click buton Jobs
    that.jobsButtonClick = function (){
    	return element (by.xpath('/html/body/footer/div/div[2]/div[1]/ul[1]/li[3]/a')).click();
    };
    
    that.jobsSignVerify= function (){
    	return element (by.xpath('/html/body/main/header/div/a/h1')).getText();
    };
    
  //butonul Tour
    that.tourButton= element (by.xpath('/html/body/footer/div/div[2]/div[1]/ul[2]/li[2]/a'));
    
    //verificare buton Tour
    that.tourButtonPresent = function (){
    	return element (by.xpath('/html/body/footer/div/div[2]/div[1]/ul[2]/li[2]/a')).isPresent();
    };
    //click buton Tour
    that.tourButtonClick = function (){
    	return element (by.xpath('/html/body/footer/div/div[2]/div[1]/ul[2]/li[2]/a')).click();
    };
    
    //verificam Tour
    that.tourSignVerify= function (){
    	return element (by.xpath('/html/body/main/header/div/a/h1')).getText();
    };
    
    //butonul The Dairy
    that.theDairyButton= element (by.xpath('/html/body/footer/div/div[2]/div[2]/ul[1]/li[4]/a'));
    
    //verificare buton The Dairy
    that.theDairyButtonPresent = function (){
    	return element (by.xpath('/html/body/footer/div/div[2]/div[2]/ul[1]/li[4]/a')).isPresent();
    };
    //click buton The Dairy
    that.theDairyButtonClick = function (){
    	return element (by.xpath('/html/body/footer/div/div[2]/div[2]/ul[1]/li[4]/a')).click();
    };
    
    //verificam The Diary
    that.theDairySignVerify= function (){
    	return element (by.xpath('/html/body/main/header/div/a/h1')).getText();
    };
    
    
    //butonul Tips and Tricks
    that.tipsAndTricksButton= element (by.xpath('/html/body/footer/div/div[2]/div[2]/ul[2]/li[4]/a'));
    
    //verificare buton Tips and Tricks
    that.tipsAndTricksButtonPresent = function (){
    	return element (by.xpath('/html/body/footer/div/div[2]/div[2]/ul[2]/li[4]/a')).isPresent();
    };
    //click buton Tips and Tricks
    that.tipsAndTricksButtonClick = function (){
    	return element (by.xpath('/html/body/footer/div/div[2]/div[2]/ul[2]/li[4]/a')).click();
    };
    
    //verificam Tips and Tricks
    that.tipsAndTricksSignVerify= function (){
    	return element (by.xpath('/html/body/main/header/div/h1')).getText();
    };
    
    //click pe Remember the milk
    
    that.clickRememberTheMilkLogo = function (){
    	return element (by.xpath('/html/body/nav/div/a')).click();
    };
    
	return that; // se ruleaza functiile care sunt inainte de return
	
})();