import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories = [];

  taskName: any;
  taskDate: any;
  taskPriority: any;
  taskCategory: any;
  taskObject: any;

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {
   // this.categories.push('work');
   // this.categories.push('personal');
  }

  AddTask() {
    this.taskObject = {
      itemName: this.taskName,
      itemDueDate: this.taskDate,
      itemPriority: this.taskPriority,
      itemCategory: this.taskCategory,
    };

    this.dismis();
  }
  selectedCategory(index: any) {
    this.taskCategory = this.categories[index];
    console.log(this.taskCategory);
  }
  async dismis() {
    await this.modalCtrl.dismiss(this.taskObject);
  }
}
