import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { request } from "http";
import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService:LoginService, private http:HttpClient){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let newReq = req;
        let token = this.loginService.getToken();
        console.log(token);
        
        if(token!= null){
            newReq = newReq.clone({setHeaders:{Authorization:"Bearer "+ token}})
            console.log(newReq);
            
        }
        return next.handle(newReq);
        
    }

}
