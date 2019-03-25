/*********************************************************
*Created by: Alexandra
*
*Description: login page
*
**********************************************************/

describe ('spec_AddNewTask', function (){
	var loginPage = require('../03.Pages/LoginPage.js');
	var logoutPage = require('../03.Pages/LogoutPage.js');
	var addNewTask = require ('../03.Pages/AddNewTasksPage.js');
	var taskName = "Task"+(new Date().getMilliseconds());
	var taskName2 = "Task"+(new Date().getMilliseconds());
	
	var testData = require ('../04.InputData/Login_InputData.json');
	    testData.forEach (function(data){
	    	
	beforeEach (function () {
		//login function
		loginPage.everyTimeLogin(data.URL, data.emailUsername, data.password);
	    console.log('Level 1 beforeEach');
	    	    });   //close beforeEach
	
	afterEach (function () {
		//logout function
		logoutPage.everyTimeLogout();
	    console.log('Level 1 afterEach');
	    	    });  //close afterEach 
	
	it ('Add New Task', function(){
		
		addNewTask.newTask(taskName);
	
	});//close it
	
/*	it ('Add New Task', function(){
		
		addNewTask.newTask(taskName2);
		
	});//close it
*/	    	
	    });//close function
	
});