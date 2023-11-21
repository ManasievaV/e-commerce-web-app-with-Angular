import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css'
})
export class ProductDetailPageComponent {
  @Input() id:any;
  test:any=33;

  toActiveOrder(data:any) {
    console.log('toActiveOrder')
    this.toAppActiveOrder.emit(data)
  }

  @Output() toAppActiveOrder= new EventEmitter<any>();
}
