import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { NewsService } from 'src/app/shared/service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll!: IonInfiniteScroll;
  isSidebarOpen = false;
  articles: any[] = [];
  selectedArticle: any = null;
  page = 1;

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

  loadNews(event?: any) {
    this.newsService.getEverything('bitcoin', this.page).subscribe(
      (res) => {
        this.articles = this.articles.concat(res.articles);
        if (event) {
          event.target.complete();
        }
        if (res.articles.length === 0 && this.infiniteScroll) {
          this.infiniteScroll.disabled = true;
        }
      },
      (err) => {
        console.error('Error al consumir la API:', err);
        if (event) {
          event.target.complete();
        }
      }
    );
  }

  loadData(event: any) {
    this.page++;
    this.loadNews(event);
  }

  openArticle(article: any) {
    this.selectedArticle = article;
  }

  closeArticle() {
    this.selectedArticle = null;
  }
}
