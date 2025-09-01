import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User, Country } from '../../interface/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form-component.component.html',
  styleUrls: ['./user-form-component.component.scss'],
  standalone: false
})
export class UserFormComponentComponent implements OnInit {
  @Output() submitForm = new EventEmitter<User>();
  form!: FormGroup;

  registerForm!: FormGroup;
  countries: Country[] = [];

  constructor(private fb: FormBuilder, private countryService: CountryService) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      country: ['', Validators.required], // aquí guardas solo el string
    });

    // Consumir API de países desde un servicio
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }

  onCountrySelected(country: Country) {
    this.registerForm.patchValue({ country: country.name
     });
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value); 
    }
  }
}
