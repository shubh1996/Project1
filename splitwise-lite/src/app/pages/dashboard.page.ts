import { Component, computed } from '@angular/core';
import { NgFor, NgIf, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StateService } from '../state.service';
import { calculateGroupBalances } from '../utils';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [NgFor, NgIf, RouterLink, DecimalPipe],
  template: `
    <div class="card">
      <div class="row" style="justify-content: space-between;">
        <div class="title">Overview</div>
        <a class="subtitle" routerLink="/add">Add Expense</a>
      </div>
      <div class="list" *ngIf="groups().length; else empty">
        <div class="row" *ngFor="let g of groups()" style="justify-content: space-between;">
          <div>
            <div><a [routerLink]="['/groups', g.id]">{{ g.name }}</a></div>
            <div class="muted subtitle">{{ g.memberIds.length }} members</div>
          </div>
          <div class="col" style="align-items: flex-end;">
            <div class="subtitle">Net</div>
            <div class="row" style="gap: 6px; flex-wrap: wrap;">
              <span class="subtitle" *ngFor="let u of g.memberIds">
                {{ userName(u) }}: {{ groupBalances(g.id)[u] | number:'1.2-2' }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <ng-template #empty>
        <div class="subtitle">No groups yet. Create one from the Groups tab.</div>
      </ng-template>
    </div>
  `
})
export class DashboardPage {
  constructor(private readonly state: StateService) {}

  readonly groups = computed(() => this.state.state().groups);
  readonly expenses = computed(() => this.state.state().expenses);

  userName(id: string): string {
    return this.state.getUser(id)?.name ?? id;
  }

  groupBalances(groupId: string) {
    const group = this.state.getGroup(groupId);
    if (!group) return {} as Record<string, number>;
    const expenses = this.expenses().filter((e) => e.groupId === groupId);
    return calculateGroupBalances(expenses, group.memberIds);
  }
}

