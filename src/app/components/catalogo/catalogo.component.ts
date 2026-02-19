import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../producto/producto.component';
import { ProductsService } from '../../services/producto.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../../models/producto.model';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent {

  private productsService = inject(ProductsService);

  products = toSignal(this.productsService.getAll(), {
    initialValue: [] as Product[]
  });
}
