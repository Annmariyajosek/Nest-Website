import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Carousel } from './carousel/carousel';
import { Navbar } from './navbar/navbar';
import { Card } from './card/card';
import { Contact } from './pages/contact/contact';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Navbar, Card, Carousel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'nest';
}
