import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule, // <--- import into the component
    /* . . . */
  ],
  template: `
    <div class="w-full flex">
      <div class="m-auto space-y-4 w-1/2">
        <!-- Email Input Box -->
        <div class="w-auto">
          <input
            type="text"
            class="w-full"
            [ngModel]="email"
            (ngModelChange)="setEmail($event)"
            placeholder="Enter your Email..."
          />
        </div>

        <div>
          <button (click)="logIn()" class="border px-4 w-full">Log In</button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export default class HomeComponent {
  email: string = 'prince';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logIn() {

    return this.router.navigateByUrl("/inbox/customer/1"); 

    fetch('http:localhost:8080/getUser', {
      method: 'POST',
      body: JSON.stringify({
        email: this.email,
      }),
    });
  }

  setEmail(event: string) {
    this.email = event;
  }
}
