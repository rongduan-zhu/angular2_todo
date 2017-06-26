import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NotificationService } from '../services/notification.service';
import { Notification } from '../core/notification';

@Component({
  selector: 'notifications',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit {
  notifications: Observable<Notification[]>

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() : void {
    this.notifications = this.notificationService.notificationSubject.asObservable();
  }
}
