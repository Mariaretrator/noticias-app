import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone : false
})
export class HomePage implements OnInit {
  isSidebarOpen = false;
  articles: any[] = [];
  selectedArticle: any = null;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadNews();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  onSidebarOption(option: string) {
    console.log('Opción seleccionada:', option);
    this.isSidebarOpen = false;
  }

  loadNews() {
    this.newsService.getEverything('bitcoin').subscribe(
      (res) => {
        this.articles = res.articles;
        console.log('Artículos:', this.articles);
      },
      (err) => {
        console.error('Error al consumir la API:', err);
      }
    );
  }

  openArticle(article: any) {
    this.selectedArticle = article;
  }

  closeArticle() {
    this.selectedArticle = null;
  }
}
