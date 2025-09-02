import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, Country } from '../../interface/user.interface';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form-component.component.html',
  styleUrls: ['./user-form-component.component.scss']
})
export class UserFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter<User>();
  form!: FormGroup;
  countries: Country[] = [];

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      country: [null, Validators.required]
    });

    this.countryService.getCountries().subscribe({
      next: (data) => (this.countries = data),
      error: (err) => console.error('Error cargando países:', err)
    });
  }

  compareCountries(c1: Country, c2: Country): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
