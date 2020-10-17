import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MessageModule } from 'primeng/message';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MessageModule,
    TabMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
