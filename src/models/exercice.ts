export class Exercice {
    private name: string;
    private exercices: [number];
    constructor() {}

    public setName(): void {}
    public setExercices(): void {}

    public getName(): string {
        return this.name
    };
    public getExercices(): Array<number> {
        return this.exercices;
    }
}
