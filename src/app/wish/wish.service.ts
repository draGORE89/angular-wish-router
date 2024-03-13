import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from 'src/shared/models/wishItem';
import { catchError } from 'rxjs/operators'; // <-- interface for catching errors
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private httpClient: HttpClient) { }
  
  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }
 
  // The get method returns an observable, so we need to actually subscribe in order to issue the request
  getWishes(): Observable<any> {
    let options = this.getStandardOptions()
    // we can add additional params directly on the url or define options.params = new HttpParams
    options.params = new HttpParams({
      fromObject: {    // <-- means we want to create url parameters from this object
        format: 'json'
      }
    })
    // to handle errors we pipe in a process to our request, which is going to handle the error
    return this.httpClient.get('http://localhost:3000/wishes').pipe(catchError(this.handleError))
  }

  addWish(wish: WishItem): Observable<any> {
    let options = this.getStandardOptions()
    // options.headers.set('Authorization', 'value-needed-for-authorization')

    return this.httpClient.post('http://localhost:3000/wishes', wish, options).pipe(catchError(this.handleError))
  }

  toggleWish(wishId: string, wish: WishItem): Observable<any> {
    let options = this.getStandardOptions()
    const url = `http://localhost:3000/wishes/${wishId}`
    return this.httpClient.put(url, wish, options).pipe(catchError(this.handleError))
  }

  deleteWish(wishId: string): Observable<any> {
    let options = this.getStandardOptions()
    return this.httpClient.delete(`http://localhost:3000/wishes/${wishId}`, options).pipe(catchError(this.handleError))
  }

  // HttpErrorResponse is a class coming from http
  private handleError(error: HttpErrorResponse) {
    // 0 for client & network, 1 for server errors
    // 1. Logs in console
    if (error.status === 0) {
      console.error('There is an issue with the client ot network:', error.error)
    } else {
      console.error('Server-side error:', error.error)
    }
    // 2. Throw for user
    return throwError(() => new Error('Cannot retrieve wishes from the server'))
  }

}
