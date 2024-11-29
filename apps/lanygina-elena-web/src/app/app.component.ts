import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HttpClient} from '@angular/common/http';
import {BACKEND_URL} from './constants';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lanygina-elena-web';

  constructor(private httpClient: HttpClient) {
    console.log('BACKEND_URL:', BACKEND_URL);
    this.httpClient.get(BACKEND_URL).subscribe({
      next: (data) => {
        console.log('data:', data);
      },
      error: (error) => {
        console.error('error:', error);
      },
    });
  }
}
