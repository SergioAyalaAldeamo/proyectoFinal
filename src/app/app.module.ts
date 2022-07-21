import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirebaseApp,initializeApp } from '@angular/fire/app';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
//servicio
import { ScriptService } from "./services/script.service";
import { ShopComponent } from './shop/shop.component';
//fin servicio
//externo
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(()=> getAuth())
  ],
  providers: [ScriptService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class ViewsModule { }
