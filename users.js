export class Users {
    constructor(id,userName, profilePic, age, height, weight, workoutplans, fitnessGoals, spotters) {
        this.id=id;
        this.userName = userName;
        this.profilePic = profilePic;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.workoutplans = workoutplans;
        this.fitnessGoals = fitnessGoals;
        this.spotters = spotters;
    }
}
export default Users;