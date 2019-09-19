import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Discipline } from 'src/model/discipline';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:5000/api/disciplines';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDisciplines (): Observable<Discipline[]> {
    return this.http.get<Discipline[]>(apiUrl)
      .pipe(
        tap(disciplines => console.log('leu as disciplinas')),
        catchError(this.handleError('getDisciplines', []))
      );
  }

  getDiscipline(id: number): Observable<Discipline> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Discipline>(url).pipe(
      tap(_ => console.log(`leu a disciplina id=${id}`)),
      catchError(this.handleError<Discipline>(`getDiscipline id=${id}`))
    );
  }

  addDiscipline (discipline): Observable<Discipline> {
    return this.http.post<Discipline>(apiUrl, discipline, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((discipline: Discipline) => console.log(`adicionou a disciplina com w/ id=${discipline._id}`)),
      catchError(this.handleError<Discipline>('addDiscipline'))
    );
  }

  updateDiscipline(id, discipline): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, discipline, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${id}`)),
      catchError(this.handleError<any>('updateDiscipline'))
    );
  }

  deleteDiscipline (id): Observable<Discipline> {
    const url = `${apiUrl}/delete/${id}`;

    return this.http.delete<Discipline>(url, httpOptions).pipe(
      tap(_ => console.log(`remove a disciplina com id=${id}`)),
      catchError(this.handleError<Discipline>('deleteDiscipline'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
