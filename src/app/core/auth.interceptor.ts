import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService:LoginService, private http:HttpClient){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let newReq = req;
        let token = this.loginService.getToken();
        
        
        if(token!= null){
            newReq = req.clone({setHeaders:{'Authorization':'Bearer '+token}})
            
            
        }
        return next.handle(newReq);
        
    }

}
export const authInterceptorProvider=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true
    }
]