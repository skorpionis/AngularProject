import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../data/service/data-handler.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] | undefined;   //? undefined

  selectedCategory : Category | undefined;

  constructor(private dataHandler: DataHandlerService) {
  }

  //методы вызывается автоматом после инициализации (исп. в конструкторе)
  ngOnInit() {
    this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories);
  }

  showTasksByCategory(category: Category) {
    this.selectedCategory = category;
    this.dataHandler.fillTasksByCategory(category);
  }
}
