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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Genie],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']

})
export class App {
  protected readonly title = signal('clientpr');
}
