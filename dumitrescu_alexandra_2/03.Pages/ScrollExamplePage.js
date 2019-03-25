/*********************************************************
*Created by: Alexandra
*
*Description: login page
*
**********************************************************/


module.exports = (function(scrollExamplePage){
	
	//-----------------------------------------------------------------------
	scrollExamplePage.scrollExample = function(URL) {
		//deschidem pagina
		browser.get(URL);
		
		//dam de scroll catre butonul About
		scrollExamplePage.scrollElemFinderIntoView(scrollExamplePage.aboutButton);
		browser.sleep(5000);
		
		//click pe butonul About
		scrollExamplePage.aboutButtonClick();
		browser.sleep(5000);
		
		//revenim la pagina initiala
		browser.navigate().back();
		
		//dam de scroll catre butonul Jobs
		scrollExamplePage.scrollElemFinderIntoView(scrollExamplePage.aboutJobs);
		browser.sleep(5000);
		
		//click pe butonul Jobs
		scrollExamplePage.aboutJobsClick();
		browser.sleep(5000);
		
	};//end function scrollExample
	
	return scrollExamplePage;
	})(require('../02.Functions/basePageObj.js'));
	