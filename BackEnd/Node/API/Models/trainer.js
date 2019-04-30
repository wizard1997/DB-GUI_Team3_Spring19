'use strict';

var sql = require('./db.js');

//Trainer object constructor
var Trainer = function(trainer){
	this.trainer_id = trainer.trainer_id;
	this.user_id = trainer.user_id;
};

//Create trainer account to be inserted into database
Trainer.createTrainer = function(newTrainer, result){
	sql.query("INSERT INTO 'DatabaseProject'.'trainers'('trainer_id', 'user_id') VALUES ('" + newTrainer.trainer_id + "', '" + newTrainer.user_id + "');",
		function(err, res){
			if(err){
				result({"code":204, "response":"Trainer account creation failed"}, null);
			}else{
				result(null, {"code":200,"response":"Trainer account created sucesstully"});
			}
		}
	);
};

//Delete trainer account
Trainer.deleteTrainer = function(id, result){
	sql.query("DELETE from 'DatabaseProject'.'trainers' WHERE user_id = ?;", [id], function(err, res){
		if(err){
			console.log('all tasks error: ', err);
			result(err, null);
		}else{
			console.log('all tasks: ', res);
			result(null, res);
		}
	});
};

module.exports = Trainer;