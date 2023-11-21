import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ServerComponent } from './server/server.component'
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ActiveOrderComponent } from './active-order/active-order.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ServerComponent, RouterLink, RouterLinkActive, ProductDetailPageComponent, ActiveOrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectJunior';
  test:string='kaka od app-component';
  showws:boolean=true;prd:any='prd';idkliknato:any;activeOrder:any=[];

  productDetailApp(tt:any) {
    // console.log('productDetailApp()    id:'+tt);
    this.showws=!this.showws;
    this.idkliknato=tt
    
  }

  updateActiveOrder(dd:any){
    // console.log('updateActiveOrder() u app.componenta')
    this.activeOrder.push(dd)
    // console.log(this.activeOrder+"active order u app")
  }

  appRemoveItems(rmItem:any){
    // console.log('rm item od APP' + rmItem)
    for (let index = 0; index < rmItem.length; index++) {
      // const element = array[index];
      // console.log(this.activeOrder+"aaaaaaaaaaaaaaaaaa")
      this.activeOrder=this.activeOrder.filter((data: any) => data[1] !== rmItem[index])
    
    }
  }
}
