'use strict';

var sql = require('./db.js');

//trainerRelation object constructor
var trainerRelation = function(trainerRelation){
	this.trainer_id = trainerRelation.trainer_id,
	this.user_id = trainerRelation.user_id
};

//Insert new trainerRelation
trainerRelation.newTrainerRelation = function(newTrainerRelation, result){
	sql.query("INSERT INTO 'DatabaseProject'.'trainerRelation' ('trainer_id', 'user_id') VALUES ('" + newTrainerRelation.trainer_id + "', '" + newTrainerRelation.user_id + "');",
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

//Update/remove user_id
trainerRelation.updateUserId = function(newUser_id, oldser_id, result){
	sql.query("UPDATE 'DatabaseProject'.'trainerRelation' SET user_id = ? WHERE user_id = ? AND plan_description = ?;", [newUser_id, oldser_id], function(err, res){
		if(err){
			result(err, null);
		}else{
			result(null,{
				"code": 200,
				"response": "Update successfull.",
				"user_id": newUser_id
			});
		}
	});
};

//Show all user_id under certain trainer_id
trainerRelation.showUserId = function(trainer, result){
	sql.query("SELECT * FROM 'DatabaseProject'.'trainerRelation' WHERE trainer_id = ?;", [trainer.user_id, trainer.trainer_id], function(err, res){
		if(err){
			result(err, null);
		}else{
			result(null,{"code":200});
		}
	});
};