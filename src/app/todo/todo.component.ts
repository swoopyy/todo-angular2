/**
 * Created by denissamohvalov on 26.07.17.
 */
import { Component, Output, EventEmitter, Input  } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class Todo {
  _id: number;
  isEditable: boolean = false;
  isChecked: boolean = false;
  text: string = '';

  @Input()
  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  @Input()
  get checked() {
    return this.isChecked;
  }


  @Output() checkedChange = new EventEmitter();

  set checked(value) {
    this.isChecked = value;
    this.checkedChange.emit(value);
  }

  onEdit() {
    this.isEditable = !this.isEditable;
    this.contentChange.emit(this.text);
  }

  @Input()
  get content() {
    return this.text;
  }

  @Output() contentChange = new EventEmitter();

  set content(value) {
    this.text = value;
  }

  @Output() todoDeleted = new EventEmitter();

  onDelete() {
    this.todoDeleted.emit();
  }

}
