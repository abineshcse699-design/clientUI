import { Routes } from '@angular/router';
import { SpecieDetails } from './specie-details/specie-details';
import { Thirdpage } from './thirdpage/thirdpage';
import { last } from 'rxjs';
import { Last } from './last/last';
import { Second } from './second/second';
import { Genie } from './genie/genie';
import { Ngtwo } from './ngtwo/ngtwo';
import { Ngone } from './ngone/ngone';
import { Prac2 } from './prac2/prac2';
import { Ngprac } from './ngprac/ngprac';


export const routes: Routes = [
  // {
  //   path:'',
  //   component:SpecieDetails,
  //   pathMatch:'full'
  // },

  {
    path:'specie',
    component:SpecieDetails
  },
  {
    path:'third',
    component:Thirdpage
  },
  {
    path:'last',
    component:Last
  },
{
  path:'second',
  component:Second
},{
  path:'ngtwo',
  component:Ngtwo
},
{
  path:'ngone',
  component:Ngone
},
{
  path:'prac2',
  component:Prac2
},
{
  path:'ngprac',
  component:Ngprac
}

];
