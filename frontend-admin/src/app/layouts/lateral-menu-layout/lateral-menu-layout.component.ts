import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs';
import { SHARED_IMPORTS } from 'src/app/shared/imports';

@Component({

  selector: 'app-lateral-menu-layout',
  templateUrl: './lateral-menu-layout.component.html',
  styleUrls: ['./lateral-menu-layout.component.scss'],
  standalone: true,
  imports: [RouterModule, ...SHARED_IMPORTS],
})
export class LateralMenuLayoutComponent  implements OnInit {

  isMobile: boolean = window.innerWidth < 768;
  currentRoute = '';
  pageTitle = '';

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(){
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this._route.firstChild;
        while (child?.firstChild) {
          child = child.firstChild;
        }
        return child?.snapshot.data || {};
      })
    ).subscribe(data => {
      this.currentRoute = this._router.url;
      this.pageTitle = data['title'] || 'Mi App';
      console.log(this.currentRoute)
    });
  }

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
