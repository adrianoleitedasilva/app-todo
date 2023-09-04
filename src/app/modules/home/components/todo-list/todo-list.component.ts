import { Component } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent  {
  public taskList: Array<TaskList> = [];

  public setEmitTaskList(event: string) {
    console.log(event);
    this.taskList.push({ task: event, checked: false });
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Deseja realmente apagar tudo?");
    if (confirm) { this.taskList = []; }
    
  }
}
