/*********************************************************
*Created by: Alexandra
*
*Description: login page
*
**********************************************************/

module.exports = (function (addNewTask){
	addNewTask.newTask = function (taskName){
		
		//Verificam numarul de task-uri
		browser.sleep(3000);
		//Click pe Add a task
		addNewTask.fillNewTaskField(taskName);
		//Completam task-ul
		browser.sleep(3000);
		//browser.break();
		addNewTask.clickAddTask();
		browser.sleep(3000);
		//Apasam pe butonul Add a task
		
		//Verificam numarul de task-uri
		
	};
	
	
	
	return addNewTask;
})(require ('..//02.Functions/basePageObj.js'));