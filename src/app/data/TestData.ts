//вместо бдшки
import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 1, title: 'Семья'},
    {id: 1, title: 'Учеба'},
    {id: 1, title: 'Отдых'},
    {id: 1, title: 'Спорт'},
    {id: 1, title: 'Еда'},
    {id: 1, title: 'Финансы'},
    {id: 1, title: 'Гаджеты'},
    {id: 1, title: 'Здоровье'},
    {id: 1, title: 'Автомобиль'},
    {id: 1, title: 'Ремонт'},
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 1, title: 'Средний', color: '#e5c231'},
    {id: 1, title: 'Высокий', color: '#e5691f'},
    {id: 1, title: 'Очень высокий', color: '#e5050c'},
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
      id: 1,
      title: 'Передать отчет',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
    },
    {
      id: 1,
      title: 'Футбол с сотрудниками',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2021-05-27')
    },
    {
      id: 1,
      title: 'Сдать анализ',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2021-05-28')
    },
    {
      id: 1,
      title: 'Самообучение',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2021-05-29')
    },
    {
      id: 1,
      title: 'Собеседование',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[6],
    },
  ]
}
