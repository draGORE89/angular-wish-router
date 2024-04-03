// import { HttpInterceptorFn } from "@angular/common/http";

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler):any {
        const token = localStorage.getItem('token') ?? ''
        if (token) {
            const authReq = req.clone({
                setHeaders: {
                    Authorization: token ? `Token ${token}` : ''
                }
            })

            return next.handle(authReq)
        }
        return next.handle(req)
    }
}