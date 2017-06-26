import { Injectable } from '@angular/core';
import { Subscriber, Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Notification } from '../core/notification';

@Injectable()
export class NotificationService {
  private notifications : Notification[] = [];

  public readonly notificationSubject : Subject<Notification[]>;

  constructor() {
    let observable = Observable.create((observer: any) => {
      observer.next(this.notifications);
    });

    let observer = Subscriber.create((notification: Notification[]) => {
      this.notifications.push(notification[0]);
    });

    this.notificationSubject = Subject.create(observer, observable);
  }
}
