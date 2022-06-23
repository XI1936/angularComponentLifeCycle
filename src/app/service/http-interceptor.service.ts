import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler){
    const newReq=req.clone({ headers: req.headers.set('Authorization', 'Bearer ')});
    const newReq2=req.clone({ url: req.url+'/test'});
    console.log(newReq);
    console.log("req2" ,newReq2);
    return next.handle(req);
  }
}
