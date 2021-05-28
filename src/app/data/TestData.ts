//вместо бдшки
import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Финансы'},
    {id: 8, title: 'Гаджеты'},
    {id: 9, title: 'Здоровье'},
    {id: 10, title: 'Автомобиль'},
    {id: 11, title: 'Ремонт'},
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#e5c231'},
    {id: 3, title: 'Высокий', color: '#e5691f'},
    {id: 4, title: 'Очень высокий', color: '#e5050c'},
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залить полный бак',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2021-05-25')
    },
    {
      id: 2,
      title: 'Передать отчет',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
    },
    {
      id: 3,
      title: 'Футбол с сотрудниками',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2021-05-27')
    },
    {
      id: 4,
      title: 'Сдать анализ',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2021-05-28')
    },
    {
      id: 5,
      title: 'Самообучение',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2021-05-29')
    },
    {
      id: 6,
      title: 'Собеседование',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[6],
    },
  ]
}
