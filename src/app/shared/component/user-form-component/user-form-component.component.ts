import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Country } from '../../interface/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form-component.component.html',
  styleUrls: ['./user-form-component.component.scss'],
  standalone: false
})
export class UserFormComponentComponent implements OnInit {

  @Output() submitForm = new EventEmitter<User>();

  countries: Country[] = [];
  user: User = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    country: { id: '', value: '' }
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://countriesnow.space/api/v0.1/countries/flag/unicode')
      .subscribe({
        next: (res) => {
          this.countries = res.data.map((c: any, i: number) => ({
            id: i.toString(),
            value: `${c.unicodeFlag} ${c.name}`
          }));
        },
        error: (err) => console.error('Error cargando países:', err)
      });
  }

  onSelectCountry(country: Country) {
    this.user.country = country;
  }

  onSubmit() {
    this.submitForm.emit(this.user);
  }
}
