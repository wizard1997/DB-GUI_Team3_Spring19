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

    getUser(accountId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${accountId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateUser(accountId, account) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/${accountId}`, account, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    addUser(user) {
        return new Promise((resolve, reject) => {
            axios.post(this.url, account, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    deleteUser(accountId) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/${accountId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
}