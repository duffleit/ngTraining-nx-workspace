import { Component } from '@angular/core';
import { MinerService } from '@david/core/bitcoin-miner';

@Component({
  selector: 'david-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  constructor(private minerService: MinerService) {}
}
