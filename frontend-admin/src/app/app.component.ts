import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: false
})
export class AppComponent {

  isMobile: boolean = window.innerWidth < 768;

  constructor() {}

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }

  closeIfMobile(drawer: any) {
    if (this.isMobile) {
      drawer.close();
    }
  }
}
