import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() currPage: any;
  @Output() onChangePage = new EventEmitter();

  toHome() {
    // console.clear();
    // console.log('before:' + this.currPage)
    this.currPage = 'home';
    this.onChangePage.emit(this.currPage);
    // console.log('after:' + this.currPage)
  }
  toShop() {
    // console.clear();
    // console.log('before:' + this.currPage)
    this.currPage = 'shop';
    this.onChangePage.emit(this.currPage);
    // console.log('after:' + this.currPage)
  }
  toProduct() {
    // console.clear();
    // console.log('before:' + this.currPage)
    this.currPage = 'product';
    this.onChangePage.emit(this.currPage);
    // console.log('after:' + this.currPage)
  }
  toAbout() {
    // console.clear();
    // console.log('before:' + this.currPage)
    this.currPage = 'about';
    this.onChangePage.emit(this.currPage);
    // console.log('after:' + this.currPage)
  }
  toBlog() {
    // console.clear();
    // console.log('before:' + this.currPage)
    this.currPage = 'blog';
    this.onChangePage.emit(this.currPage);
    // console.log('after:' + this.currPage)
  }
  toContact() {
    // console.clear();
    // console.log('before:' + this.currPage)
    this.currPage = 'contact';
    this.onChangePage.emit(this.currPage);
    // console.log('after:' + this.currPage)
  }
  toUser() {
    // console.clear();
    // console.log('before:' + this.currPage)
    this.currPage = 'user';
    this.onChangePage.emit(this.currPage);
    // console.log('after:' + this.currPage)
  }
  toCart() {
    // console.clear();
    // console.log('before:' + this.currPage)
    this.currPage = 'cart';
    this.onChangePage.emit(this.currPage);
    // console.log('after:' + this.currPage)
  }
}
