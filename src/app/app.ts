import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Card } from './card/card';
import { Contact } from './pages/contact/contact';
import { Carousal } from './carousal/carousal';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Navbar, Card, Carousal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'nest';
}
