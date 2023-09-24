import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 today : number = Date.now() 
  todoList: any[]=[];
  constructor(public modalCtrl:ModalController) {}

   async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    })
    modal.onDidDismiss().then(newTaskObj =>{
     // console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data)
      
    })
    return await modal.present()
  }

  getAllTasks(){

  }

  delete(index: any){
    this.todoList.splice(index,1)
  }

}
