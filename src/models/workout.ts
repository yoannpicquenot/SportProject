export class Workout {
    private name: string;
    private exercices: [{id: number, name: string}];
    constructor() {}

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    };

    public setExercices(exercices: [{id: number, name: string}]): void {
        this.exercices = exercices;
    }

    public getExercices(): Array<{id: number, name: string}> {
        return this.exercices;
    }

    public getNumberOfExercices(): number {
        return this.exercices.length;
    }
}
