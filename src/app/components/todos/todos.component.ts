import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  deleteTodo(todo:Todo){
    console.log("Delete me!");
    this.todos = this.todos.filter(x => x.id != todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo): void{
    console.log("Adding todo...");
    this.todoService.addTodo(todo).subscribe(x => 
      this.todos.push(x));
  }

}
