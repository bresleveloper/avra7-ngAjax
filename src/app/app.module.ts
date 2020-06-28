import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { GitDbComponent } from './comps/git-db/git-db.component';
import { NewDbJsonComponent } from './comps/new-db-json/new-db-json.component';

@NgModule({
  declarations: [
    AppComponent,
    GitDbComponent,
    NewDbJsonComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
