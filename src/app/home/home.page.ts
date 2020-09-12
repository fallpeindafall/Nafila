import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
nafilas = [
			{
				nuit: 'Nuit 1 : 10 rakkas, soit 5 sallama',
				contenu: 'Chaque rakka, réciter à haute voix : 1 fois «FATIHA», 2 fois «QOUL YAA AYYUHAL KAFIROON» et 2 fois «KHOUL HOU ALLAHOU AHAD».'
			},
			{
				nuit: 'Nuit 2 : 6 rakkas, soit 3 sallama',
				contenu: 'Dans chaque rakka, réciter à haute voix : 1 FATIHA et 5 fois «INNA A’TAÏLNAKA».'
			},
			{
				nuit: 'Nuit 3 : 6 rakkas, soit 3 sallama',
				contenu: 'Dans chaque rakka, réciter à haute voix : 1 FATIHA et 5 fois «INNA ANZAL NAHOU».'
			},
			{
				nuit: 'Nuit 4 : 4 rakkas, soit 2 sallama',
				contenu: 'Dans chaque rakka, réciter à haute voix : 1 FATIHA et 3 fois «QOUL YAA AYYUHAL KAFIROON ».'
			},
			{
				nuit: 'Nuit 5 : 8 rakkas, soit 4 sallama',
				contenu: 'Dans chaque rakka, réciter à haute voix : 1 fois « FATIHA », 1 fois « ALAM NASRA » et 3 fois « KHOUL HOU ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 6 : 2 rakkas, soit 1 sallama',
				contenu: 'Chaque rakka, réciter à haute voix : : 1 fois « FATIHA » et 10 fois « QOUL HOU ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 7 : 6 rakkas, soit 3 sallama',
				contenu: 'Chaque rakka, réciter à haute voix : :   1 fois « FATIHA » , 7 fois « QOUL YAA AYYUHAL KAFIROON » et 7 fois « QOUL HOUWA ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 8 : 2 rakkas, soit 1 sallama',
				contenu: 'Chaque rakka, réciter à haute voix : :   1 fois « FATIHA », 12 fois « QOUL HOUWA ALLAHOU AHAD » et 12 fois « QOUL AOUZOU BI RABBIL NASSI ».'
			},
			{
				nuit: 'Nuit 9 : 8 rakkas, soit 4 sallama',
				contenu: 'Chaque rakka, réciter à haute voix: 1 fois « FATIHA », 3 fois « TABAT YADA » et 3 fois « QOUL HOUWA ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 10 : 8 rakkas, soit 4 sallama',
				contenu: 'Chaque rakka,réciter à haute voix:  1 fois « FATIHA », 1 fois « AYATOUL KOURSIYOU », 1 fois « INNA ANZAL NAHOU » et 3 fois « QOUL HOUWA ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 11 :  4 rakkas, soit 2 sallama',
				contenu: 'Chaque rakka, réciter à haute voix:  1 fois « FATIHA », 7 fois« INNA ANZAL NAHOU » et 7 fois « QOUL HOUWA ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 12 : 10 rakkas, soit 5 sallama',
				contenu: ' Chaque rakka, réciter à haute voix:  1 fois « FATIHA » et 6 fois « QOUL HOUWA ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 13 : 10 rakkas, soit 5 sallama',
				contenu: 'Chaque rakka, réciter à haute voix:  1 fois « FATIHA », 7 fois « IZADJA’A NASROULAHI » et 7 fois « QOUL HOUWA ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 14 : 8 rakkas, soit 4 sallama',
				contenu: 'Chaque rakka, réciter à haute voix: 1 fois « FATIHA », 7 fois « IZADJA’A NASROULAHI » et 7 fois « QOUL HOUWA ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 15 : 6 rakkas, soit 3 sallama',
				contenu: 'Chaque rakka, réciter à haute voix:  1 fois « FATIHA » 1 fois « IZADJA’A NASROULAHI » et 35 fois « QOUL HOUWA ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 16 : 6 rakkas, soit 3 sallama',
				contenu: 'Chaque rakka, réciter à haute voix: 1 fois « FATIHA » et 10 fois « IZA’ ZOULZILATI ».'
			},
			{
				nuit: 'Nuit 17 : 10 rakkas, soit  5 sallama',
				contenu: 'Chaque rakka, réciter à haute voix: 1 fois « FATIHA »,2 fois « INNA ANZAL NAHOU »et 2 fois « QOUL HOUWA ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 18 : 12 rakkas, soit  6 sallama',
				contenu: 'Chaque rakka, réciter à haute voix: 1 fois « FATIHA », 1 fois « SABBI HISMA RABBIKA LAHLA », 1 fois « QOUL YA AYOUHAL KAFIROUNA » et 1 fois « QOUL HOUWA ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 19 : 6 rakkas, soit  3 sallama',
				contenu: 'Chaque rakka, réciter à haute voix: 1 fois « FATIHA » et 7 fois « QOUL HOUWA ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 20 : 10 rakkas, soit  5 sallama',
				contenu: 'Chaque rakka, réciter à haute voix: 1 fois « FATIHA », 3 fois « INNA ANZAL NAHOU » et 3 fois « QOUL HOUWA ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 21 : 4 rakkas, soit  2 sallama',
				contenu: 'Chaque rakka, réciter à haute voix: 1 fois « FATIHA » et 10 fois « QOUL HOUWA ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 22 : 2 rakkas, soit  1 sallama',
				contenu: 'Chaque rakka, réciter à haute voix: 1 fois « FATIHA », 1 fois « SABBI HISMA RABBIKAL LAHLA » et 3 fois « QOUL AOUZOU BIRABIL NASSI ».'
			},
			{
				nuit: 'Nuit 23 : 4 rakkas, soit  2 sallama',
				contenu: 'Chaque rakka, réciter à haute voix: 1 fois « FATIHA », 5 fois « IZADJA’A NASROULAHI » et 5 fois « QOUL HOUWA ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 24 : 6 rakkas, soit  3 sallama',
				contenu: 'Chaque rakka, réciter à haute voix: 1 fois « FATIHA », 6 fois « QOUL AOUZOU BIRABIL FALAKHI » et 6 fois « QOUL AOUZOU BIRABIL NASSI».'
			},
			{
				nuit: 'Nuit 25 : 8 rakkas, soit 4 sallama',
				contenu: 'Chaque rakka, réciter à haute voix: 1 fois « FATIHA » et 4 fois « QOUL HOUWA ALLAHOU AHAD».'
			},
			{
				nuit: 'Nuit 26 : 10 rakkas, soit 5 sallama',
				contenu: 'Chaque rakka, réciter à haute voix: 1 fois « FATIHA » et 5 fois « QOUL HOUWA ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 27 : 12 rakkas, soit 6 sallama',
				contenu: 'Chaque rakka, réciter à haute voix: 1 fois « FATIHA » et 10 fois « INNA ANZAL NAHOU».'
			},
			{
				nuit: 'Nuit 28 : 4 rakkas, soit 2 sallama',
				contenu: 'Chaque rakka, réciter à haute voix: 1 fois « FATIHA », 1 fois « WATINI WA ZAYTOUNI », 1 fois « QOUL YA AYOUHAL KAFIROUNA » et 5 fois « QOUL HOUWA ALLAHOU AHAD ».'
			},
			{
				nuit: 'Nuit 29 : 6 rakkas, soit 3 sallama',
				contenu: 'Chaque rakka, réciter à haute voix: 1 fois « FATIHA » et 10 fois « QOUL HOUWA ALLAHOU AHAD ».'
			},

	];
  constructor(public alertController: AlertController) {}
  ngOnInit() {}

 async presentAlert(nafila): Promise<void>  {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: nafila.nuit,
      subHeader:' ',
      message: nafila.contenu
    });

    await alert.present();
  }
}
