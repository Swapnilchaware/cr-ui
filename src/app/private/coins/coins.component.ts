import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CoinsService } from 'src/app/core/services/coins.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  data : any = '';
  totalLength : number = 0;
  totalRecords : any = [];
  constructor(
    private _coinsService: CoinsService
  ) { }

  ngOnInit(): void {

  //Getting cors error..used the json directly
  //  this._coinsService.getData().subscribe(res => {
  //   console.log(res);
    
  //  })

   this.data = JSON.parse(this._coinsService.data);
   this.totalRecords = Object.values(this.data.data);
   for (let i of Object.entries(this.data.data)) {
    this.totalLength++;
   }

   let username = localStorage.getItem('username');
   if (username) {
     this._coinsService.onCoinCheck(username).subscribe(res=>console.log(res));
   }

  }

  truncValue(val:number) {
    return Math.trunc(val)
  }

}
