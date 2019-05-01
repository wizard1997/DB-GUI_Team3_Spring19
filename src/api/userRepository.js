import axios from 'axios';

export class UserRepository {
    url = "http://ec2-3-14-146-143.us-east-2.compute.amazonaws.com:8080";
    config = {
        headers: {
            Authorization: 'bhathoot'
        }
    };

    getUser() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/users`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    getUser(userId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/user/${userId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateUser(userId, user) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/${userId}`, user, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    addWorkoutplan(userId,workoutplan) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/workoutplan/create/${userId}`, workoutplan, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    getWorkoutplan(planId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/workoutplan/${planId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
    getAllWorkoutplan(userId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/user/workoutplan/${userId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
    deleteWorkoutplan(planId) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/workoutplan/delete/${planId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
}