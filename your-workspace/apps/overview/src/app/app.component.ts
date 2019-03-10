import { Component } from '@angular/core';
import { MinerService } from '@david/core/bitcoin-miner';

@Component({
  selector: 'david-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public token = "";

  constructor(minerService: MinerService){
    this.token = minerService.mine();
  }
}
