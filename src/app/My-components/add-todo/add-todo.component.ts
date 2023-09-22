import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title: string = "";
  desc: string = "";
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor() {
  }
  onSubmit() {
    const todo = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
