import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutsPage, WorkoutsModal } from './workouts';

@NgModule({
    declarations: [
        WorkoutsPage,
    ],
    entryComponents: [
        WorkoutsModal
    ],
    imports: [
        IonicPageModule.forChild(WorkoutsPage),
    ],
})
export class WorkoutsPageModule { }
