import { Component, DoCheck } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = [];

  ngDoCheck(): void {
    this.taskList.sort( (first, last)=> Number(first.checked) - Number(last.checked));
  }


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
