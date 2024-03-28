import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { BASE_URL } from 'src/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  options = this.getStandardOptions()

  constructor(private HttpClient: HttpClient) { }

  // private data: any[] = [
  //   {id: 1, name: "Guitar", price: "1000"},
  //   {id: 2, name: "Piano", price: "5000"},
  //   {id: 3, name: "Drums", price: "1200"},
  // ]


  getAllProducts(): Observable<any> {
    // of - Returns an observable of our data
    // return of(this.data);
    return this.HttpClient.get(BASE_URL + '/products', this.options).pipe(catchError(this.handleError))
  }

  getProduct(productId: string): Observable<any> {
    // return of(this.data.find(product => product.id === id));
    return this.HttpClient.get(BASE_URL + '/products/' + productId, this.options).pipe(catchError(this.handleError))
  }

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    }
  }

  private handleError(error: HttpErrorResponse) {
    // 0 for client & network, 1 for server errors
    // 1. Logs in console
    if (error.status === 0) {
      console.error('There is an issue with the client ot network:', error.error)
    } else {
      console.error('Server-side error:', error.error)
    }
    // 2. Throw for user
    return throwError(() => new Error('Cannot retrieve products from the server'))
  }
}
