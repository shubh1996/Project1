import { Component, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf, DatePipe, CurrencyPipe } from '@angular/common';
import { StateService } from '../state.service';
import { calculateGroupBalances } from '../utils';

@Component({
  standalone: true,
  selector: 'app-group-detail',
  imports: [NgFor, NgIf, RouterLink, DatePipe, CurrencyPipe],
  template: `
    <div class="col" *ngIf="group(); else missing">
      <div class="row" style="justify-content: space-between; align-items: baseline;">
        <div class="title">{{ group()?.name }}</div>
        <a routerLink="/add" class="subtitle">Add Expense</a>
      </div>
      <div class="card">
        <div class="subtitle">Balances</div>
        <div class="row" style="gap: 16px; flex-wrap: wrap;">
          <span *ngFor="let u of group()!.memberIds" class="subtitle">
            {{ userName(u) }}: {{ balances()[u] | number:'1.2-2' }}
          </span>
        </div>
      </div>
      <div class="card col">
        <div class="subtitle">Recent expenses</div>
        <div class="list" *ngIf="groupExpenses().length; else none">
          <div class="row" *ngFor="let e of groupExpenses()" style="justify-content: space-between;">
            <div>
              <div>{{ e.description }} • {{ e.amount | currency:'USD':'symbol':'1.2-2' }}</div>
              <div class="muted subtitle">
                Paid by {{ userName(e.paidByUserId) }} on {{ e.dateIso | date:'mediumDate' }}
              </div>
            </div>
            <div class="subtitle">{{ e.splitMemberIds.length }} split</div>
          </div>
        </div>
        <ng-template #none><div class="subtitle">No expenses yet.</div></ng-template>
      </div>
    </div>
    <ng-template #missing>
      <div class="subtitle">Group not found.</div>
    </ng-template>
  `
})
export class GroupDetailPage {
  constructor(private readonly route: ActivatedRoute, private readonly state: StateService) {}

  readonly groupId = computed(() => this.route.snapshot.paramMap.get('groupId')!);
  readonly group = computed(() => this.state.getGroup(this.groupId()));
  readonly expenses = computed(() => this.state.state().expenses);
  readonly groupExpenses = computed(() => this.expenses().filter((e) => e.groupId === this.groupId()));
  readonly balances = computed(() => {
    const g = this.group();
    if (!g) return {} as Record<string, number>;
    return calculateGroupBalances(this.groupExpenses(), g.memberIds);
  });

  userName(id: string) { return this.state.getUser(id)?.name ?? id; }
}

