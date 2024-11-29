import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import { IconProperty1ChevronLeftPComponent } from 'src/app/nos-offres/icon-property-1-chevron-left-p/icon-property-1-chevron-left-p.component';
import {IconProperty1ChevronRightComponent} from 'src/app/nos-offres/icon-property-1-chevron-right/icon-property-1-chevron-right.component';
import { AppareilComponent } from 'src/app/appareil/appareil.component';
import { AppareilService } from 'src/app/appareil/appareil.service';

/* @figmaId 95:295 */
@Component({
  selector: 'Chiiz-nos-offres',
  templateUrl: './nos-offres.component.html',
  styleUrls: ['./nos-offres.component.scss'],
})
export class NosOffresComponent implements OnInit {
  public appareils: any[] = [];

  constructor(private appareilService: AppareilService) {}

  ngOnInit(): void {
    this.appareils = this.appareilService.getAppareils();
  }
}
