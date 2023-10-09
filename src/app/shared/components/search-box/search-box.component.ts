import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private deBouncer: Subject<string> = new Subject<string>();
  private debounceSubscription?: Subscription;

  @Input()
  public placeHolder: string = '';
  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output ()
  onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.deBouncer.pipe(debounceTime(400)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.debounceSubscription?.unsubscribe();
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.deBouncer.next(searchTerm);
  }
}
