import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { YouTubeTagerPipe } from './utils/you-tube-tager.pipe';
import { HilighterDirective } from './utils/hilighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    YouTubeTagerPipe,
    HilighterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
