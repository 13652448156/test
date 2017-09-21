import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewPage} from "../new/new";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  testNewPage() {

    this.navCtrl.push(NewPage,{

      item1:'ios-newPage'
    });


  }
}
