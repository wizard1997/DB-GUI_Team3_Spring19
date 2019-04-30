'use strict';

var sql = require('./db.js');

//mealHistory object constructor
var mealHistory = function(mealHistory){
	this.user_id = mealHistory.user_id,
	this.calories = mealHistory.calories,
	this.date = mealHistory.meal_date
};

//Create new meal
mealHistory.addMeal = function(id, newMeal, result){
	sql.query("INSERT INTO 'DatabaseProject'.'mealHistory' ('user_id','calories', 'date') VALUES ('" + id +  "', '" + newMeal.calories + "', '" + newMeal.meal_date + "');",
		function(err, res){
			if(err){
				result(err, null);
			}else{
				result(null,{
					"code": 200,
					"response": "Insert successfull.",
				});
			}
		}
	);
};

//select previous meal by meal id
mealHistory.selectMealByID = function(id, result){
	sql.query("SELECT * FROM 'DatabaseProject'.'mealHistory' WHERE meal_id = ?;", [id], function(err, res){
		if(err){
			result({"code":204,"response":"Could not locate id in table."},null);
		}else{
			result(null,res);
		}
	});
};

//select meals by user id
mealHistory.selectMealByUserID = function(id, result){
	sql.query("SELECT * FROM 'DatabaseProject'.'mealHistory' WHERE user_id = ?;", [id], function(err, res){
		if(err){
			result({"code":204,"response":"Could not locate id in table."},null);
		}else{
			result(null,res);
		}
	});
};

module.exports = mealHistory;
