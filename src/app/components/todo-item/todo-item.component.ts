import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo:EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClass(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  // On Toggle of checkbox
  onToggle(todo:Todo){
    console.log('toggle cbx');
    // UI
    todo.completed = !todo.completed;
    // Server
    this.todoService.toggled(todo).subscribe(todo => console.log(todo));
  }

  // On delete btn pressed
  onDelete(todo:Todo){
    console.log('delete todo');
    this.deleteTodo.emit(todo);
  }


}
