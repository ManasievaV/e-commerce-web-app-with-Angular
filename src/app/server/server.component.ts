import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apollo } from 'apollo-angular';
// import { GET_COUNTRIES } from '../graphql.operations';
import { gql } from "apollo-angular";
import { NgFor } from '@angular/common';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-server',
  standalone: true,
  imports: [CommonModule, NgFor, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})

export class ServerComponent implements OnInit {
  error: any;
  loading : boolean = true;
  x:any=5;totalItems:any; allItems:any[]=[];allItemsTest:any[]=[]

  constructor(private apollo : Apollo){}

  ngOnInit(): void {
    this.loadtotalItems(this.x);
  }

  loadtotalItems(y:any){  
    this.apollo.watchQuery({
      query: gql `
      {
        products{
          totalItems
        }
      }
      `
    }).valueChanges.subscribe(({data, error} : any) => {
      this.loading = false;
      this.totalItems = data.products.totalItems;
      // console.log(y)
      // console.log("od oninit"+this.totalItems+"od oninit")
    })
  }

  
  klikni(){
    // console.log("kliknano")
    
    for (let index = 1; index < this.totalItems+1; index++) {
      this.apollo.watchQuery({
        query: gql `
            {
              product(id:${index}){
                id
                name
                description
                assets{
                  preview
                }
                collections{
                  name
                }
                variants{
                  name
                  price
                  priceWithTax
                  currencyCode
                  stockLevel
                  assets{
                    name
                  }
                }
              }
            }
            `
      }).valueChanges.subscribe(({data, error} : any) => {
        this.loading = false;

        // this.allItems = data.product;

        this.allItemsTest = Object.values(data.product) 

        this.allItems.push(Object.values(data.product))
        this.error=error;
        // console.log("u query "+ data)
        // console.log(Object.values(data.product)[4])
        console.log("Collection"+this.allItemsTest[5][0].name)
        // console.log("u query "+this.allItems)

      })
    }
    // console.log(this.totalItems+" posle")
    // console.log("posle query u FOR "+this.allItems)
  }

  productDetailClicked(data:any){
    console.log("productDetailClicked")
    this.productDetailtoApp.emit(data)
  } 

  @Output() productDetailtoApp= new EventEmitter<any>();
}
