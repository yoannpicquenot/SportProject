import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { Workout } from '../../models/workout';

@Component({
    templateUrl: 'workouts-modal.html'
})
export class WorkoutsModal {
    constructor(public modalCtrl: ModalController, public viewCtrl: ViewController) { }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}

@IonicPage()
@Component({
    selector: 'page-workouts',
    templateUrl: 'workouts.html',
})
export class WorkoutsPage {

    public workouts: [Workout];

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    }

    ionViewDidLoad() {
    }

    public addWorkout() {
        let modal = this.modalCtrl.create(WorkoutsModal);
        modal.present();
    }

}
