import { Component } from '@angular/core';

interface Tool {
  name: string;
  rating: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Favorite Tools';

  tools: Tool[] = [
    { name: 'hammer', rating: 0 },
    { name: 'screwdriver', rating: 0 },
    { name: 'spanner', rating: 0 },
    { name: 'wrench', rating: 0 },
    { name: 'drill', rating: 0 },
    { name: 'saw', rating: 0 },
    { name: 'pliers', rating: 0 },
    { name: 'shovel', rating: 0 },
    { name: 'rake', rating: 0 },
    { name: 'sanding machine', rating: 0 }
  ];
}
