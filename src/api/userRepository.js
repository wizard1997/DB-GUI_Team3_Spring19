import axios from 'axios';

// export class UserRepository {
var url = "http://ec2-3-14-98-48.us-east-2.compute.amazonaws.com:8080";

export const getUsers = () => {
    return new Promise((resolve, reject) => {
        return axios.get(url + `/users`)
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp));
    });
}

export const getUser = userId => {
    return new Promise((resolve, reject) => {
        return axios.get(url + `/user/` + userId)
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp));
    });
}



//     updateUser(userId, user) {
//         return new Promise((resolve, reject) => {
//             axios.put(`${this.url}/${userId}`, user, this.config)
//                 .then(resp => resolve(resp.data))
//                 .catch(resp => alert(resp));
//         });
//     }

//     addWorkoutplan(userId,workoutplan) {
//         return new Promise((resolve, reject) => {
//             axios.post(`${this.url}/workoutplan/create/${userId}`, workoutplan, this.config)
//                 .then(resp => resolve(resp.data))
//                 .catch(resp => alert(resp));
//         });
//     }

//     getWorkoutplan(planId) {
//         return new Promise((resolve, reject) => {
//             axios.get(`${this.url}/workoutplan/${planId}`, this.config)
//                 .then(resp => resolve(resp.data))
//                 .catch(resp => alert(resp));
//         });
//     }
//     getAllWorkoutplan(userId) {
//         return new Promise((resolve, reject) => {
//             axios.get(`${this.url}/user/workoutplan/${userId}`, this.config)
//                 .then(resp => resolve(resp.data))
//                 .catch(resp => alert(resp));
//         });
//     }
//     deleteWorkoutplan(planId) {
//         return new Promise((resolve, reject) => {
//             axios.delete(`${this.url}/workoutplan/delete/${planId}`, this.config)
//                 .then(resp => resolve(resp.data))
//                 .catch(resp => alert(resp));
//         });
//     }
// }