import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: environment.wsUrl, options: {} };

import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';


import { environment } from 'src/environments/environment';
import { GraficaComponent } from './components/grafica/grafica.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    NgChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
