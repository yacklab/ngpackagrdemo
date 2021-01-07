import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-test',
  template: `
    <p>
      test works!
    </p>
  `,
  styles: [
  ]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
