import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})

export class TodoInputAddItemsComponent {
  @Output() public emitItemTastList = new EventEmitter();
  public addItemTaskList: string = "";

  public submitItemTaskList() {
    // Corrigindo problema sobre o envio de tasks vazias
    this.addItemTaskList = this.addItemTaskList.trim();

    if(this.addItemTaskList){
      this.emitItemTastList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }

}
