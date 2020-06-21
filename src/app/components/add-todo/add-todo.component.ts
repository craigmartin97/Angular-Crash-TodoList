import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter<any>();
  title:string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.title);
    const todo = {
      title: this.title
    };

    this.addTodo.emit(todo);
  }
}
