import axios from 'axios';

export class UserRepository {
    url = "https://api.johnlawrimore.com/directory/accounts";
    config = {
        headers: {
            Authorization: 'bHathoot'
        }
    };

    getUser() {
        return new Promise((resolve, reject) => {
            axios.get(this.url, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    getUser(userId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${userId}`, this.config)
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

    addUser(user) {
        return new Promise((resolve, reject) => {
            axios.post(this.url, user, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
    addWorkoutplan(userId,workoutplan) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/${userId}/workoutplans`, workoutplan, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
    deleteUser(userId) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/${userId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
}