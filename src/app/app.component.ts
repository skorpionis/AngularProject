import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '' +
    '<div style="..." class="content"> ' +
    '<h1> welcome to {{title}}!</h1> ' +
    '<span style="...">{{title}} app is runnin!</span> ' +
    '<img width="300" alt="Angular Logo" src="data:"> ' +
    '</div>' +
    '<h2>Paru linkov dlia smeha: </h2>' +
    '<ul>' +
      '<li>' +
        '<h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial"></a></h2>' +
      '</li>' +
    '<li>' +
        '<h2><a target="_blank" rel="noopener" href="https://angular.io/cli"></a></h2>' +
      '</li>' +
    '<li>' +
        '<h2><a target="_blank" rel="noopener" href="https://blog.angular.io/"></a></h2>' +
      '</li>' +
     '</ul>',
  styles: []

})
export class AppComponent {
  title = 'FirstAngularProject';
}
