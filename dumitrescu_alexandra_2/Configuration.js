var Jasmine2HtmlReporter = require('C:/Users/User1064/eclipse-workspace/dumitrescu_alexandra_2/node_modules/protractor-jasmine2-screenshot-reporter');
//definire variabila care se va folosi in functia de on prepare
var timeStamp = new Date().getTime();

exports.config={
		//fisierul este vizibil in momentul cand e apelat
		
	   //seleniumAddress:'http://localhost:4444/wd/hub',	//seteaza conexiunea la server-ul intern
	   directConnect: true, 	//selecteaza driver-ul chrome
	   

       capabilities: {
    	       	   'browserName':'chrome'
    	  
       },
       
       framework:'jasmine',
       
       onPrepare: function() {
       
       		browser.driver.manage().window().maximize(); //maximizeaza fereastra
       	
       		jasmine.getEnv().addReporter(
       				new Jasmine2HtmlReporter ({
       					
       					savePath: 'C:\Users\User1064\eclipse-workspace\dumitrescu_alexandra_2\taget\screenshots',
       						showSummary: true,
       						showQuickLinks: true,
       						showConfiguration: true,
       						screenshotsFolder: 'images',
       						takeScreenshots: true,
       						takeScreenshotsOnlyOnFailures: true,
       						fixedScreenshotName: true,
       						ignoreSkippedSpecs: true,
       						consolidate: true,
       						consolidateAll: true,
       						preserveDirectory: true,
       						fileName: 'Protractor-Execution-Report-'+ timeStamp
       						
       				})       				
       		);
       },
       
       		jasmineNodeOpts: {
       				showColors: true,
       				isVerbose: true,
       				realtimeFailure: true,
       				includeStackTrace: true,
       				defaultTimeoutInterval: 500000 
       		},
       		
       		//specs: ['../'] //la teste individuale nu se pune virgula, .. - pointeaza in ramura din spate
       		
       		//specs: ['../dumitrescu_alexandra_2/01.Scenarios/spec_LoginScript.js']
       		//specs: ['../dumitrescu_alexandra_2/01.Scenarios/spec_LogoutScript.js']
       		//specs: ['../dumitrescu_alexandra_2/01.Scenarios/spec_AddNewTask.js']
       		//specs: ['../dumitrescu_alexandra_2/01.Scenarios/spec_ScrollExample.js']
       		specs: ['../dumitrescu_alexandra_2/01.Scenarios/spec_CheckBottomButtonsLoginAndLogout.js']
       		/*suites: {
       			suite: [
       				'../',
       				'../'		
       			]
       		},*/   
}