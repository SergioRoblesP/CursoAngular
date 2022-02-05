import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  template: `
  <div class="container">
  <h1 class="title">Gracias!</h1>
  <p class="content">Tu pedido está en camino!</p>
  <span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quo autem
    ut facilis velit, laboriosam nihil, voluptates cum neque asperiores commodi
    sequi vel eveniet iure dicta suscipit sit inventore molestiae.
  </span>
  </div>`,
  styleUrls: ['./thank-you-page.component.scss']
})
export class ThankYouPageComponent {
}
