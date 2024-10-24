import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductosComponent implements OnInit {
  products: any[] = [];
  counter = signal(3);

  ngOnInit(): void {
    this.products = ['producto 1', 'producto 2', 'producto 3'];
  }

  addProduct(newProduct: string) {
    this.products.push(newProduct);
    this.increments();
  }

  increments() {
    this.counter.set(this.counter() + 1);
  }
}
