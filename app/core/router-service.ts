import { Injectable, Inject } from 'angular2/core';
import { Router } from 'angular2/router';

@Injectable()
export class RouterService {
  constructor(@Inject(Router) private router: Router) {
  }

  public navigateTo(route: string) {
    this.router.navigate([route]);
  }
}