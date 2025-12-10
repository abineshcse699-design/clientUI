// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-ngtwo',
//   imports: [],
//
// })
// export class Ngtwo {

// }


// import { Component } from '@angular/core';

import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-ngtwo',
  imports: [MatExpansionModule],
  templateUrl: './ngtwo.html',
  styleUrl: './ngtwo.scss',
  // templateUrl: './two.html',
  // styleUrl: './two.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ngtwo {
  readonly panelOpenState = signal(false);


   products=[



{sku:1,id:'ANANA',name:'Ananas Mill',price:'Pineapple',details:'Bromeliaceae',image:'./q.jpg'},
{sku:1,id:'BRASS_OLE',name:'Brassica oleracea L.',price:'',details:'Brassicaceae',image:'./a1.png'},
{sku:1,id:'BRASS_CAR',name:'Brassica caterinata A..Braun',price:'Abyssinnian cabbage;',details:'Brassicaceae',image:'./h.png'},
{sku:1,id:'AGAPA',name:'Agapanthus L `Her ',price:'African Lily',details:'Agapanthaceae',image:'./a1.png'},
{sku:1,id:'BRASS_CAR',name:'Brassica caterinata A..Braun',price:'Abyssinnian cabbage;chou E...',details:'ed',image:'./h.png'},
     {sku:1,id:'CAMPA_LTL',name:'iphone',price:'n2',details:'Campanulaceae',image:'./k.png'},

    ]




  products1=[


{sku:1,id:'BRASS_CAR',name:'Brassica oleracea L.',price:'Abyssin cabbage;chou E...',details:'Brassicaceae',image:'./h.png'},
{sku:1,id:'CAMPA_LTL',name:'Campanula latiloba A.DC',price:'',details:'Campanulaseae',image:'./k.png'},
{sku:1,id:'CALCN_FLO',name:'Calycanthus florida L. ',price:'Carolina-allspice;pineapple-...',details:'Iradaceae',image:'./r.jpg'},
{sku:1,id:'AGAPA',name:'Agapanthus L `Her',price:'african Lily',details:'Agapanthaceae',image:'./a1.png'},

{sku:1,id:'ANANA',name:'Ananas Mill',price:'Pineapple',details:'Bromeliaceae',image:'./j.png'},
// {sku:1,name:'',price:99.98,details:'',image:'./main.jpg'},
     {sku:1,id:'BRASS_OLE',name:'Brassica oleracea L.',price:99.98,details:'Brassicaceae',image:'./a1.png'},

    ]

    product2=[

{sku:1,name:'Mr Anish Singh Cheif of PBR',Address:'IP Autralia ,Discovery House ,47 Bowes Street P.O>BOx 200 ,Philipp 2606',email1:'anish.singh@ipaustalia.gov.au',email2:'legistration@ipaustralia.gov.au',email3:'cheif.PBR@ipaurstralia.gov.au'},

    ]


}
