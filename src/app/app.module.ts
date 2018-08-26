import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { V2calcyComponent } from './v2calcy/v2calcy.component';
import { RouterModule, Routes} from '@angular/router';
import { Calcyv1Component } from './calcyv1/calcyv1.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';

const routes: Routes = [
  {path: 'v2',
component: V2calcyComponent}, {path:'v1', component: Calcyv1Component}
]

@NgModule({
  declarations: [
    AppComponent,
    V2calcyComponent,
    Calcyv1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), 
    BrowserAnimationsModule, 
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
