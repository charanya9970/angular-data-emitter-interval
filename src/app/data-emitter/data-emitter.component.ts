import { Component, Input, OnInit, Output } from "@angular/core";
import { interval, Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-data-emitter",
  templateUrl: "./data-emitter.component.html",
  styleUrls: ["./data-emitter.component.css"]
})
export class DataEmitterComponent implements OnInit {
  @Output() data: any;
  @Input() apiUrl: any;
  @Input() intervalPeriod: number;

  minutes: number = 10000;
  subscription$: Observable<any>;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.subscription$ = this.getData();

    this.minutes = this.intervalPeriod * 60 * 1000;
    this.subscription$ = interval(this.minutes).pipe(
      switchMap(() => this.getData())
    );
  }

  getData() {
    return this.http.get(this.apiUrl);
  }

  ngOnDestroy() {
    //this.subscription$.unsubscribe();
  }
}
