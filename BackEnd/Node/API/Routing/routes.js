'use strict';

module.exports = function(app) {

  var userControl = require('../Controller/userController.js');
  var workoutControl = require('../Controller/workoutPlanController.js');
  var progressControl = require('../Controller/progressController.js');
  var goalControl = require('../Controller/goalController.js');

  //USER
  //Register, login and delete
  app.route('/register')
    .post(userControl.create_user);
  app.route('/login')
    .post(userControl.login_user);
  app.route('/delete_user/:user_id')
    .delete(userControl.delete_user);
  //Updating user info
  app.route('/user/username/:user_id')
    .put(userControl.update_username);
  app.route('/user/email/:user_id')
    .put(userControl.update_email);
  app.route('/user/f_name/:user_id')
    .put(userControl.update_fname);
  app.route('/user/l_name/:user_id')
    .put(userControl.update_lname);
  app.route('/user/password/:user_id')
    .put(userControl.update_pass);
  app.route('/user/phone/:user_id')
    .put(userControl.update_phone);
  //Getting users
  app.route('/user/:user_id')
    .get(userControl.get_user);
  app.route('/users')
    .get(userControl.list_all_users);

//-------------------------------------------------

  //WORKOUT PLANS
  //create and delete
  app.route('/workoutplan/create/:user_id')
    .post(workoutControl.create_plan);
  app.route('/workoutplan/delete/:plan_id')
    .delete(workoutControl.delete_plan);
  //selecting based on plan id or user id
  app.route('/workoutplan/:plan_id')
    .get(workoutControl.select_plan_by_id);
  app.route('/user/workoutplan/:user_id')
    .get(workoutControl.select_plan_by_userID);
  //edit info
  app.route('/workoutplan/description/:plan_id')
    .put(workoutControl.update_description);
  app.route('/workoutplan/calories/:plan_id')
    .put(workoutControl.update_calories);
  app.route('/workoutplan/workouttime/:plan_id')
    .put(workoutControl.update_time);

//-------------------------------------------------

  //PROGRESS
  //create and delete
  app.route('/progress/create/:user_id')
    .post(progressControl.create_progress);
  app.route('/progress/delete/:prog_id')
    .delete(progressControl.delete_progress);
  //selecting based on progress id or user id
  app.route('/progress/:prog_id')
    .get(progressControl.select_progress);
  app.route('/user/progress/:user_id')
    .get(progressControl.select_progress_by_userID);
  //edit info
  app.route('/progress/height/:prog_id')
    .put(progressControl.update_height);
  app.route('/progress/weight/:prog_id')
    .put(progressControl.update_weight);
  app.route('/progress/age/:prog_id')
    .put(progressControl.update_age);
  app.route('/progress/description/:prog_id')
    .put(progressControl.update_descript);

//-------------------------------------------------

  //GOALS
  //create and delete
  app.route('/goal/create/:user_id')
    .post(goalControl.create_goal);
  app.route('/goal/delete/:goal_id')
    .delete(goalControl.delete_goal);
  //selecting based on goal id or user id
  app.route('/goal/:goal_id')
    .get(goalControl.select_goal);
  app.route('/user/goals/:user_id')
    .get(goalControl.select_goals_by_userID);
  //edit info
  app.route('/goal/description/:goal_id')
    .put(goalControl.update_description);
  app.route('/goal/date/:goal_id')
    .put(goalControl.update_date);

    //-------------------------------------------------

    //MEAL HISTORY
    //create
    app.route('/meal/create/:user_id')
      .post(mealControl.add_meal);
    //selecting based on meal id and user id
    app.route('/meal/:meal_id')
      .get(mealControl.select_meal_by_id);
    app.route('/user/meal/:user_id')
      .get(mealControl.select_meal_by_userID);
    //delete 
    app.route('/meal/delete:meal_id')
      .delete(mealControl.delete_meal);

    //--------------------------------------------------
    //MEAL PLAN
    //create
    app.route('/mealplans/create/:user_id')
      .post(mealPlanControl.add_mealplan);
    //selecting based on meal id and user id
    app.route('/mealplans/:mealplan_id')
      .get(mealPlanControl.select_mealplan_by_id);
    app.route('/user/mealplans/:user_id')
      .get(mealPlanControl.select_mealplan_by_userID);
    //delete 
    app.route('/mealplans/delete:mealplan_id')
      .delete(mealPlanControl.delete_mealplan);
};
