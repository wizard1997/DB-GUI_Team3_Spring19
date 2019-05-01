export class FitnessGoal {
    constructor(name, type, deadline, percent, currentPercent, comment, date) {
        this.name = name;
        this.type = type;
        this.percent = percent;
        this.deadline = deadline;
        this.comment = comment;       
        this.date = date;
        this.currentPercent = currentPercent;
    }
}

export default FitnessGoal; 