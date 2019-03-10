import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiButtonModule } from '@david/ui/button';
import { MinerService } from '@david/core/bitcoin-miner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    UiButtonModule,
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [MinerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
