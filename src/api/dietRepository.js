import axios from 'axios';

var url = "http://ec2-3-14-98-48.us-east-2.compute.amazonaws.com:8080";

export const getmealPlans = user_id => {
    return new Promise((resolve, reject) => {
        return axios.get(`http://ec2-3-14-147-194.us-east-2.compute.amazonaws.com:8080/user/mealplans/` + user_id)
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp));
    });
}

export const getFood = user_id => {
    return new Promise((resolve, reject) => {
        return axios.get(url + `/user/meal/` + user_id)
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp));
    });
}

export const addFood = user_id => {
    return new Promise((resolve, reject) => {
        return axios.post(url + `/meal/create/` + user_id)
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp));
    });
}

//     addWorkoutplan(userId,workoutplan) {
//         return new Promise((resolve, reject) => {
//             axios.post(`${this.url}/workoutplan/create/${userId}`, workoutplan, this.config)
//                 .then(resp => resolve(resp.data))
//                 .catch(resp => alert(resp));
//         });
//     }