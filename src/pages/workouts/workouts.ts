import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { Workout } from '../../models/workout';

@Component({
    templateUrl: 'workouts-modal.html'
})
export class WorkoutsModal {
    @Input()
    public myInput: string = "";
    constructor(public modalCtrl: ModalController, public viewCtrl: ViewController) { }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    public createWorkout() {
        this.viewCtrl.dismiss(this.myInput)
    }
}

@IonicPage()
@Component({
    selector: 'page-workouts',
    templateUrl: 'workouts.html',
})
export class WorkoutsPage {

    public workouts: [any];

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    }

    ionViewDidLoad() {
    }

    public addWorkout() {
        let modal = this.modalCtrl.create(WorkoutsModal);
        modal.onDidDismiss(data => {
            this.workouts.push(new Workout(data));
        });
        modal.present();
    }

}
