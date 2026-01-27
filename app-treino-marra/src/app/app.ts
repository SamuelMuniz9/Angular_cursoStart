import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-treino-marra');

  mostrarLayout = true;
  rotasSemLayout: string[] = ['/formulario'];

constructor(private router: Router) {
  this.router.events.subscribe(() => {
    this.mostrarLayout = !this.rotasSemLayout.includes(this.router.url);
  });
}
}

