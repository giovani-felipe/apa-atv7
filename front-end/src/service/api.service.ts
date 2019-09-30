import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/api/v1';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAll<T> (entity: string): Observable<T[]> {
    return this.http.get<T[]>(`${apiUrl}/${entity}`)
      .pipe(
        tap(_ => console.log('leu as entidades')),
        catchError(this.handleError('getAll', []))
      );
  }

  getOne<T>(id: string, entity: string): Observable<T> {
    const url = `${apiUrl}/${entity}/${id}`;
    return this.http.get<T>(url)
      .pipe(
        tap(_ => console.log(`leu a entidade id=${id}`)),
        catchError(this.handleError<T>(`getOne id=${id}`))
    );
  }

  add<T>(element, entity: string): Observable<T> {
    return this.http.post<T>(`${apiUrl}/${entity}`, element, httpOptions).pipe(
      tap((element: T) => console.log(`adicionou a entidade`)),
      catchError(this.handleError<T>('add'))
    );
  }

  update(id, element, entity): Observable<any> {
    const url = `${apiUrl}/${entity}/${id}`;
    return this.http.put(url, element, httpOptions).pipe(
      tap(_ => console.log(`atualiza o elemento com id=${id}`)),
      catchError(this.handleError<any>('update'))
    );
  }

  delete<T>(id, entity): Observable<T> {
    const url = `${apiUrl}/${entity}/delete/${id}`;

    return this.http.delete<T>(url, httpOptions).pipe(
      tap(_ => console.log(`remove a entidade com id=${id}`)),
      catchError(this.handleError<T>('delete'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
