import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "spa-element",
  template: `
    <div id="spa">
      <div class="card">
        <div class="content"></div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      #spa {
        border: navy dashed 5px;
        padding: 10px;
      }
    `
  ]
})
export class AppComponent {
  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      console.debug("params", params);
    });

    window.addEventListener("client-message", e =>
      console.debug("client-message event", e)
    );
  }
}
