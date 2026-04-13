import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter } from '@ionic/angular/standalone';

import { AdMob, BannerAdPosition } from '@capacitor-community/admob';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFooter],
})
export class HomePage implements OnInit {
  constructor() { }

  async ngOnInit() {
    await AdMob.initialize();

    await AdMob.showBanner({
      adId: 'ca-app-pub-3940256099942544/9214589741',
      position: BannerAdPosition.BOTTOM_CENTER,
    });
  }
}
