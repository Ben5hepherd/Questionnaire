
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { finalize, tap, delay } from 'rxjs/operators';
import { LoadingSpinnerService } from '../services/loading-spinner.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    count = 0;

    constructor(private loadingSpinnerService: LoadingSpinnerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${localStorage.getItem('bearer-token')}`
            }
        });

        setTimeout(() => { this.loadingSpinnerService.show(); }, 0)
        this.count++;

        return next.handle(request).pipe(delay(100), tap(

            event => console.log(event),

            error => console.log(error)

        ), finalize(() => {

            this.count--;

            if (this.count == 0) {
                setTimeout(() => { this.loadingSpinnerService.hide(); }, 0)
            }
        })
        );
    }
}