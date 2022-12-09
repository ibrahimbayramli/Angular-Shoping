import {Component, Input, OnInit} from '@angular/core';
import {BasketModel} from "../../models/basket";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  @Input() baskets: BasketModel[] = [];
  @Input() total: number = 0;

  constructor(
    private toastService: ToastrService
  ) {
  }

  ngOnInit(): void {
  }

  deleteProduct(basket: BasketModel) {
    let index = this.baskets.indexOf(basket);
    this.baskets.splice(index, 1);
    this.total = this.total - (basket.product.price * basket.quantity);
    this.toastService.info(basket.product.name + " ürün sepetinizden başarıyla silindi");
  }

  calc() {
    this.total = 0;
    this.baskets.forEach(element => {
      this.total = this.total + element.product.price * element.quantity;
    })
    return this.total;
  }

  changeData(basket: BasketModel) {
    let quantity: number = parseInt((<HTMLInputElement>document.getElementById("basketQuantity-" + basket.product.name)).value);

    let index = this.baskets.indexOf(basket);
    this.baskets.splice(index, 1);
    basket.quantity = quantity;
    this.baskets.push(basket);
  }

  payment(event: any) {
    if (this.total == event.total) {
      let count=this.baskets.length;
      this.baskets.splice(0,count);
      this.toastService.info("Ödemeniz başarılı. Siparişiniz sevk aşamasına geçti.")
    }
  }

}
