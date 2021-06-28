import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() paramSearch = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public goToHome() {
    this.router.navigateByUrl('/');
  }

  public searchData($event: any) {
    this.paramSearch.emit($event);
  }
}
