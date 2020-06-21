import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url:string = "https://jsonplaceholder.typicode.com/todos";

  limit:number = 5;
  limitString:string = "?_limit=";

  constructor(private httpClient:HttpClient) { }

  
  getTodos(): Observable<Todo[]>{
    this.setLimit(20);
    var tempUrl = this.url + this.limitString + this.limit;
    return this.httpClient.get<Todo[]>(tempUrl);
  }

  toggled(todo:Todo):Observable<any>{
    const url = `${this.url}/${todo.id}`;
    return this.httpClient.put(url, todo, httpOptions)
  }

  deleteTodo(todo:Todo):Observable<Todo>{
    const url = `${this.url}/${todo.id}`;
    return this.httpClient.delete<Todo>(url, httpOptions);
  }

  addTodo(todo:Todo):Observable<Todo>{
    return this.httpClient.post<Todo>(this.url, todo, httpOptions);
  }

  setLimit(value:number): void{
    this.limit = value;  
  }
}
