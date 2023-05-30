import {Component, OnInit} from '@angular/core';
import {CurrencyClientService, RootObject} from '../../services/currency-client.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  initMessage: string;
  messageForUser: string;
  rootObject: RootObject;
  result: string;

  constructor(private currencyClientService: CurrencyClientService) {
  }

  ngOnInit(): void {
    this.initMessage = "Zagraj w currency-game";
    this.currencyClientService.getCurrency().subscribe(value => {
      this.rootObject = value;
    });
  }

  sayHello(value: string) {
    this.messageForUser = 'cześć ' + value;
  }

  check(value: number) {
    console.log(this.rootObject.rates.PLN);
    if (value > this.rootObject.rates.PLN) {
      this.result = 'podales wartość za dużą';
    } else if (value < this.rootObject.rates.PLN) {
      this.result = 'podales wartość za małą';
    } else {
      this.result = 'udało się, gratulacje!' + value;
    }
  }
}
