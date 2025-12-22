import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Genie } from "./genie/genie";
import { SpecieDetails } from "./specie-details/specie-details";
import { Thirdpage } from "./thirdpage/thirdpage";
import { FourPage } from "./four-page/four-page";
import { last } from 'rxjs';
import { Last } from "./last/last";
import { Ext } from "./ext/ext";
import { Second } from "./second/second";
import { Ngone } from "./ngone/ngone";
import {  Ngtwo } from "./ngtwo/ngtwo";
import { Prac } from "./prac/prac";
import { Prac1 } from "./prac1/prac1";
import { Prac2 } from "./prac2/prac2";
import { Ngprac } from "./ngprac/ngprac";
import { Space } from "./space/space";
import { Ngmain } from "./ngmain/ngmain";
import { BrassicaDetails } from "./brassica-details/brassica-details";
// import { AustraliaDetail } from "./australia-detail/australia-detail";
import { MatIconModule } from '@angular/material/icon';
// import { Ngprac } from "./ngprac/ngprac";


@Component({
  selector: 'app-root',
  imports: [Genie, Prac2, Ngmain, MatIconModule, BrassicaDetails, SpecieDetails],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']

})
export class App {
  protected readonly title = signal('clientpr');
}
