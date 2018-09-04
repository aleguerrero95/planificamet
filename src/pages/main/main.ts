import { Component, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
  animations: [

  trigger('bounce', [
        state('*', style({
            transform: 'translateX(0)'
        })),
        transition('* => rightSwipe', animate('700ms ease-out', keyframes([
          style({transform: 'translateX(0)', offset: 0}),
          style({transform: 'translateX(-65px)',  offset: 0.3}),
          style({transform: 'translateX(0)',     offset: 1.0})
        ]))),
        transition('* => leftSwipe', animate('700ms ease-out', keyframes([
          style({transform: 'translateX(0)', offset: 0}),
          style({transform: 'translateX(65px)',  offset: 0.3}),
          style({transform: 'translateX(0)',     offset: 1.0})
        ])))
    ])
  ]
})
export class MainPage {
  state: string = 'x';

  slideMoved() {
    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
      this.state = 'rightSwipe';
    else
      this.state = 'leftSwipe';
  }

  animationDone() {
    this.state = 'x';
  }

  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Omitir";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  skip() {
    this.navCtrl.push('LoginPage');
  }

  slideChanged() {
    if (this.slides.isEnd())
      this.skipMsg = "Ok, Empecemos";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
