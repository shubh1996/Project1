import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  standalone: true,
  selector: 'app-groups',
  imports: [NgFor, NgIf, RouterLink],
  template: `
    <div class="card col">
      <div class="title">Groups</div>
      <div class="list" *ngIf="state.state().groups.length; else empty">
        <div *ngFor="let g of state.state().groups" class="row" style="justify-content: space-between;">
          <div>
            <div><a [routerLink]="['/groups', g.id]">{{ g.name }}</a></div>
            <div class="subtitle muted">{{ g.memberIds.length }} members</div>
          </div>
          <a class="subtitle" [routerLink]="['/groups', g.id]">Open</a>
        </div>
      </div>
      <ng-template #empty>
        <div class="subtitle">No groups yet.</div>
      </ng-template>
    </div>
  `
})
export class GroupsPage {
  constructor(public readonly state: StateService) {}
}

