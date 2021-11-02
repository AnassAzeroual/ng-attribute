import { Attribute, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  // @Input('data')
  // set nosubscription(nosubs) {
  //   console.log(nosubs);
  // }
  constructor(@Attribute('data') public data) {
    console.log(data);
  }

  ngOnInit() {}
}
