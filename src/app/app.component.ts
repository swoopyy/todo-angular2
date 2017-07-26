import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'app';
  todos = [];
  todoValue: string;
  idCounter: number = 0;

  toggleAll(value) {
    for (let i = 0; i < this.todos.length; ++i) {
      this.todos[i].checked = value;
    }
  }

  submitTodo() {
    this.todos.push({
      id: this.idCounter++,
      text: this.todoValue,
      checked: false
    });
    this.todoValue = '';
  }

  delete(id) {
    for (let i = 0; i < this.todos.length; ++i) {
      if (this.todos[i].id == id) {
        this.todos.splice(i, 1);
        i--;
      }
    }
  }

  clearCompleted() {
    for (let i = 0; i < this.todos.length; ++i) {
      if (this.todos[i].checked) {
        this.todos.splice(i, 1);
        i--;
      }
    }
  }
}
