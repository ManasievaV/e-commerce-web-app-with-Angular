import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-active-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active-order.component.html',
  styleUrl: './active-order.component.css'
})
export class ActiveOrderComponent {
  @Input() activeOrderData:any; idActiveItems:any=[];

  selectedItems(selectOrder:any){
    // console.log('selectedItems()'+selectOrder);
    this.idActiveItems.push(selectOrder)
    // console.log('this.idActiveItems()'+this.idActiveItems);
  }

  removeItems(){
    this.toAppremoveItems.emit(this.idActiveItems)
    // console.log(+this.idActiveItems)
  }
  @Output() toAppremoveItems= new EventEmitter<any>();
}
