// import { Component } from '@angular/core';

//
// export class Ngone {

// }


import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-ngone',
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './ngone.html',
  styleUrl: './ngone.scss',
})

export class Ngone {

  products=[


{sku:1,name:'Ananas Mill',price:'Pineapple',details:'Bromeliaceae',image:'./a1.png '},
{sku:1,name:'Brassica oleracea L.',price:'s21',details:'Brassicaceae',image:'./a1.png'},
{sku:1,name:'Brassica caterinata A..Braun',price:'Abyssinnian cabbage;',details:'Brassicaceae',image:'./a1.png'},
{sku:1,name:'Agapanthus L `Her ',price:'African Lily',details:'Agapanthaceae',image:'./a1.png'},
{sku:1,name:'Brassica caterinata A..Braun',price:'Abyssinnian cabbage;chou E...',details:'ed',image:'./a1.pg'},
     {sku:1,name:'iphone',price:'n2',details:'Campanulaceae',image:'./main.jpg'},

    ]




  products1=[


{sku:1,name:'Brassica oleracea L.',price:'Abyssin cabbage;chou E...',details:'Brassicaceae',image:'./a2.png'},
{sku:1,name:'Campanula latiloba A.DC',price:'2ed',details:'Campanulaseae',image:'./a2.png'},
{sku:1,name:'Calycanthus florida L. ',price:'Carolina-allspice;pineapple-...',details:'Iradaceae',image:'./a2.png'},
{sku:1,name:'Agapanthus L `Her',price:'african Lily',details:'Agapanthaceae',image:'./a2.png'},

{sku:1,name:'Ananas Mill',price:'Pineapple',details:'Bromeliaceae',image:'./a2.png '},
// {sku:1,name:'',price:99.98,details:'',image:'./main.jpg'},
     {sku:1,name:'Brassica oleracea L.',price:99.98,details:'Brassicaceae',image:'./main.jpg'},

    ]

    product2=[

{sku:1,name:'Mr Anish Singh Cheif of PBR',Address:'IP Autralia ,Discovery House ,47 Bowes Street P.O>BOx 200 ,Philipp 2606',email1:'anish.singh@ipaustalia.gov.au',email2:'legistration@ipaustralia.gov.au',email3:'cheif.PBR@ipaurstralia.gov.au'},

    ]


}
