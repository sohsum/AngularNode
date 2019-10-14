import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { myService } from './my-service.service';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule, MatToolbarModule } from '@angular/material';  
import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { NodeComponent } from './node/node.component';
 
import {APP_BASE_HREF} from '@angular/common';

@NgModule({  
  declarations: [  
    AppComponent,  
    NodeComponent  
  ],  
  imports: [  
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    BrowserAnimationsModule,  
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule 
     
  ],  

  providers: [HttpClientModule, myService,MatDatepickerModule,{provide: APP_BASE_HREF, useValue : '/' }],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  
