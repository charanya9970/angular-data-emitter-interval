import { Component, Input, OnInit, Output } from "@angular/core";
import { interval } from "rxjs";
import { flatMap, map } from "rxjs/operators";
import { Http } from "@angular/http";

@Component({
  selector: 'app-data-emitter',
  templateUrl: './data-emitter.component.html',
  styleUrls: ['./data-emitter.component.css']
})
export class DataEmitterComponent implements OnInit {



  @Output() data: any;
  @Input() apiUrl: any;
  @Input() intervalPeriod: number;

  minutes: number = 10000;
  subscription$: any;

  constructor(private http: Http) {}
  ngOnInit() {
    this.getData().subscribe(data => {
        this.data = data;
        console.log(this.data);
      });

    this.minutes = this.intervalPeriod * 60 * 1000;
    this.subscription$ = interval(this.minutes)
      .pipe(flatMap(() => this.getData()))
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
      });
  }

  getData() {
    return this.http
      .get(this.apiUrl)
      .pipe(map((response: any) => response.json()));
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
