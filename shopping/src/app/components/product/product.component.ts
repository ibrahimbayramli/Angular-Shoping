import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../models/product";
import {BasketModel} from "../../models/basket";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  baskets:BasketModel[]=[];
  total:number=0;
  @Output() myEvent:EventEmitter<any>=new EventEmitter<any>();


  prodacts: ProductModel[] = [
    {name: "Peynir", price: 26.61, imageUrl: "https://productimages.hepsiburada.net/s/23/375/9991242022962.jpg"},
    {
      name: "Zeytin",
      price: 132.50,
      imageUrl: "https://st3.myideasoft.com/idea/bg/23/myassets/products/015/biber-tursusu74973fbe-b650-44da-a2d6-26caaccce0e8.jpg?revision=1607420304"
    },
    {
      name: "Tereyağ",
      price: 60,
      imageUrl: "https://www.yoreseltrabzonurunleri.com/images/urunler/Koy-Tipi-Tereyagi-1000-g-resim-233.jpg"
    },
    {
      name: "Lavaş",
      price: 26.50,
      imageUrl: "https://cdn.akakce.com/uno/uno-8-adet-tandir-lavas-z.jpg"
    },
    {
      name: "Yeşil Zeytin",
      price: 99.99,
      imageUrl: "https://st.myideasoft.com/idea/gc/32/myassets/products/526/domat-biberlii-1000x1000.png?revision=1591028193"
    },
    {
      name: "Telefon Kablosu",
      price: 18.90,
      imageUrl: "https://productimages.hepsiburada.net/s/10/500/9207755767858.jpg"
    },
    {
      name: "Piriz",
      price: 9.99,
      imageUrl: "https://productimages.hepsiburada.net/s/5/375/9704182251570.jpg"
    },
    {
      name: "Ekmek",
      price: 2.50,
      imageUrl: "https://images.migrosone.com/sanalmarket/product/05120000/05120000-a957e2-1650x1650.jpg"
    }

  ]




  constructor(
    private toastService:ToastrService
  ) {

  }
  toastrService:ToastrService;
  ngOnInit(): void {
  }

  addBasket(product:ProductModel){
    let basketModel=new BasketModel();
    basketModel.product=product;
    console.log();
//! (<HTMLInputElement>document.getElementById("quantity-"+product.name)).value
    basketModel.quantity=parseInt((<HTMLInputElement>document.getElementById("quantity-"+product.name)).value);
    (<HTMLInputElement>document.getElementById("quantity-"+product.name)).value="1";
    this.baskets.push(basketModel);
    //* this.total=this.total+(basketModel.quantity*product.price);
      this.total=0;
    this.baskets.forEach(element=>{
      this.total=this.total+element.product.price*element.quantity;
    })
    this.myEvent.emit({data:this.baskets})
    this.toastService.success(product.name+" sepete başarıyla eklendi.")
  }

}
