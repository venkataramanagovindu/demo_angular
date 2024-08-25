import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-first-component',
  standalone: true,
  imports: [],
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.css'
})
export class MyFirstComponentComponent {
constructor(private route: ActivatedRoute){

}

ngOnInit() {
  this.route.queryParams.subscribe( params => {
    if(params['message'])
      this.message = params['message']
  })
}

  @Input() message: string = '';
}
