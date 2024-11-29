import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HttpClient} from '@angular/common/http';
import {BACKEND_URL} from './constants';
import {catchError, of, shareReplay} from 'rxjs';
import {CommonModule} from '@angular/common';

console.log('BACKEND_URL:', BACKEND_URL);

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lanygina-elena-web';
  response$: any = this['httpClient'].get(BACKEND_URL)
    .pipe(shareReplay(), catchError(() => of(null)));

  constructor(private httpClient: HttpClient) {
  }
}
