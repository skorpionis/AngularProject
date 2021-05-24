import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div style="text-align: center">
          <h2>Paru linkov dlia smeha: </h2>
          <ul>
              <li>
                  <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of tutorial</a></h2> 
              </li>
              
              <li> 
                  <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2> 
              </li>
              <li> 
                  <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2> 
              </li>
          </ul>
      </div>
      <div style="text-align: center" class="content"> 
          <h1>
              <div style="text-align: center;">Первый проект - {{title}}!</div>
          </h1>
          <div style="text-align: center;">{{title}} app is runnin!</div>
          <img width="300" alt="Angular Logo" src="favicon.ico"> 
      </div>`,
  styles: []
})
export class AppComponent {
  title = 'FirstAngularProject';
}
