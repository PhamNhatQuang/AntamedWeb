import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { BannerComponent } from './banner/banner.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    HomeComponent,
    BannerComponent,
    BlogComponent,
    CartComponent,
    ShopComponent,
    UserComponent,
    ContactComponent,
    CommonModule,
    BlogDetailComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'AntamedWeb';
  currentPage: string = '';

  ngOnInit(): void {
    this.currentPage = 'home';
  }

  changePage(currPage: any) {
    // console.log('after\ncurrPage: ' + currPage);
    // console.log('this.currentPage: ' + this.currentPage);
    this.currentPage = currPage;
    // console.log('after\ncurrPage: ' + currPage);
    // console.log('this.currentPage: ' + this.currentPage);
  }
}
