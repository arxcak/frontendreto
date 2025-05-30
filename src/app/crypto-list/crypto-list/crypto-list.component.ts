import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Crypto } from '../../interfaces/crypto';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-list',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent {
  cryptos: Crypto[] = [];
  isLoading = true;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.loadCryptos();
  }

  loadCryptos(): void {
    this.isLoading = true;
    
    this.cryptoService.getCryptos().subscribe({
      next: (data) => {

        console.log(data);
        this.cryptos = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        // Manejo básico de errores
        this.cryptos = [];
      }
    });
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: price < 1 ? 6 : 2,
      maximumFractionDigits: price < 1 ? 6 : 2
    }).format(price);
  }

  getPriceChangeClass(change: number): string {
    return change >= 0 ? 'text-success' : 'text-danger';
  }
}
