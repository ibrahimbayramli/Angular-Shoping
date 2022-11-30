import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping';
  // constructor(private _toastr: ToastrService) {
  //   this._toastr.success(("Deneme mesaj"));
  // }
}
