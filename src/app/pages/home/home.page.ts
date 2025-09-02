import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/shared/service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.newsService.getEverything('bitcoin').subscribe(
      (res) => {
        console.log('Respuesta completa:', res);
        console.log('Artículos:', res.articles);
      },
      (err) => {
        console.error('Error al consumir la API:', err);
      }
    );
  }
}
