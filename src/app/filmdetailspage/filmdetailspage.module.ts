import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FilmdetailspagePage } from './filmdetailspage.page';

const routes: Routes = [
  {
    path: '',
    component: FilmdetailspagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FilmdetailspagePage]
})
export class FilmdetailspagePageModule {}
