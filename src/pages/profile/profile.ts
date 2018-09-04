import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  Alert,
  AlertController,
  ToastController
} from "ionic-angular";
import { ProfileProvider } from "../../providers/profile/profile";
import { AuthProvider } from "../../providers/auth/auth";


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public userProfile: any;
  // public birthDate: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    public profileProvider: ProfileProvider,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.profileProvider.getUserProfile().on("value", userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      // this.birthDate = userProfileSnapshot.val().birthDate;
    });
  }

  logOut(): void {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot("LoginPage");
    });
  }

  updateName(): void {
    const alert: Alert = this.alertCtrl.create({
      message: "Ingresa tu nombre y apellido.",
      inputs: [
        {
          name: "firstName",
          placeholder: "Tu nombre",
          value: this.userProfile.firstName
        },
        {
          name: "lastName",
          placeholder: "Tu apellido",
          value: this.userProfile.lastName
        }
      ],
      buttons: [
        { text: "Cancelar" },
        {
          text: "Guardar",
          handler: data => {
            this.profileProvider.updateName(data.firstName, data.lastName);

            let toast = this.toastCtrl.create({
            message: 'Nombre actualizado correctamente!',
            duration: 3000,
            position: 'bottom'
          });

            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });

            toast.present();
          }
        }
      ]
    });
    alert.present();
  }

  // updateDOB(birthDate:string):void {
  //   this.profileProvider.updateDOB(birthDate);
  // }

  updateCarnet(): void {
    const alert: Alert = this.alertCtrl.create({
    message: "Ingresa tu carnet.",
    inputs: [
    {
    name: "carnet",
    placeholder: "Tu carnet",
    value: this.userProfile.carnet
    },
    ],
    buttons: [
    { text: "Cancelar" },
    {
    text: "Guardar",
    handler: data => {
    this.profileProvider.updateCarnet(data.carnet);

    let toast = this.toastCtrl.create({
    message: 'Carnet actualizado correctamente!',
    duration: 3000,
    position: 'bottom'
  });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
    }
    }
    ]
    });
    alert.present();
  }

  updateDOB(carrera:string):void {
    this.profileProvider.updateDOB(carrera);
    let toast = this.toastCtrl.create({
    message: 'Carrera actualizada correctamente!',
    duration: 3000,
    position: 'bottom'
  });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
    }

  updateEmail(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [{ name: 'newEmail', placeholder: 'Ingresa un nuevo correo' },
      { name: 'password', placeholder: 'Tu contraseña', type: 'password' }],
      buttons: [
        { text: 'Cancelar' },
        { text: 'Guardar',
          handler: data => {
            this.profileProvider
              .updateEmail(data.newEmail, data.password)
              .then(() => { console.log('E-mail registrado correctamente'); })
              .catch(error => { console.log('ERROR: ' + error.message); });

              let toast = this.toastCtrl.create({
              message: 'E-mail actualizado correctamente!',
              duration: 3000,
              position: 'bottom'
            });

            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
            toast.present();
        }}]
    });
    alert.present();
  }

  updatePassword(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [
        { name: 'newPassword', placeholder: 'Contraseña nueva', type: 'password' },
        { name: 'oldPassword', placeholder: 'Contraseña actual', type: 'password' }],
      buttons: [
        { text: 'Cancelar' },
        { text: 'Guardar',
          handler: data => {
            this.profileProvider.updatePassword(
              data.newPassword,
              data.oldPassword
            );

            let toast = this.toastCtrl.create({
            message: 'Contraseña actualizada correctamente!',
            duration: 3000,
            position: 'bottom'
          });

            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });

            toast.present();
          }
        }
      ]
    });
    alert.present();
  }

  goToList(): void {
  this.navCtrl.push('EventListPage');
  }

  goToTrimestre(): void {
  this.navCtrl.push('TrimestrePage');
  }

}
