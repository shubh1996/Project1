import { Component, signal, computed } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  standalone: true,
  selector: 'app-add-expense',
  imports: [NgFor, NgIf, RouterLink, FormsModule],
  template: `
    <div class="card col" style="gap: 16px;">
      <div class="title">Add Expense</div>
      <div class="row" style="gap: 16px;">
        <div class="col" style="flex: 1;">
          <label class="subtitle">Description</label>
          <input [ngModel]="description()" (ngModelChange)="description.set($event)" placeholder="e.g. Groceries" />
        </div>
        <div class="col">
          <label class="subtitle">Amount</label>
          <input type="number" min="0" step="0.01" [ngModel]="amountStr()" (ngModelChange)="amountStr.set($event)" />
        </div>
      </div>
      <div class="row" style="gap: 16px;">
        <div class="col">
          <label class="subtitle">Group</label>
          <select [ngModel]="groupId()" (ngModelChange)="groupId.set($event)">
            <option *ngFor="let g of groups()" [value]="g.id">{{ g.name }}</option>
          </select>
        </div>
        <div class="col">
          <label class="subtitle">Paid by</label>
          <select [ngModel]="paidByUserId()" (ngModelChange)="paidByUserId.set($event)">
            <option *ngFor="let u of groupMembers()" [value]="u.id">{{ u.name }}</option>
          </select>
        </div>
      </div>
      <div class="col">
        <div class="subtitle">Included in split</div>
        <div class="row" style="flex-wrap: wrap; gap: 10px;">
          <label *ngFor="let u of groupMembers()" class="row" style="gap: 6px;">
            <input type="checkbox" [checked]="selectedMemberIds().includes(u.id)" (change)="toggleIncluded(u.id, $event.target?.checked)" />
            {{ u.name }}
          </label>
        </div>
      </div>
      <div class="row" style="justify-content: space-between;">
        <div class="subtitle muted" *ngIf="!formValid()">Fill all fields and include at least one member.</div>
        <button class="primary" [disabled]="!formValid()" (click)="submit()">Save</button>
      </div>
    </div>
  `
})
export class AddExpensePage {
  description = signal<string>('');
  amountStr = signal<string>('');
  groupId = signal<string>('');
  paidByUserId = signal<string>('');
  selectedMemberIds = signal<string[]>([]);

  constructor(private readonly state: StateService, private readonly router: Router) {
    const g = this.state.state().groups[0];
    if (g) {
      this.groupId.set(g.id);
      this.selectedMemberIds.set([...g.memberIds]);
      this.paidByUserId.set(g.memberIds[0]);
    }
  }

  readonly groups = computed(() => this.state.state().groups);
  readonly users = computed(() => this.state.state().users);
  readonly groupMembers = computed(() => {
    const g = this.state.getGroup(this.groupId());
    return g ? this.users().filter((u) => g.memberIds.includes(u.id)) : [];
  });

  toggleIncluded(id: string, checked: boolean | null | undefined) {
    const set = new Set(this.selectedMemberIds());
    if (checked) set.add(id); else set.delete(id);
    this.selectedMemberIds.set([...set]);
  }

  formValid() {
    const amt = Number(this.amountStr());
    return (
      this.description().trim().length > 0 &&
      !isNaN(amt) && amt > 0 &&
      this.groupId().length > 0 &&
      this.paidByUserId().length > 0 &&
      this.selectedMemberIds().length > 0
    );
  }

  submit() {
    if (!this.formValid()) return;
    this.state.addExpense({
      groupId: this.groupId(),
      description: this.description().trim(),
      paidByUserId: this.paidByUserId(),
      amount: Math.round(Number(this.amountStr()) * 100) / 100,
      splitMemberIds: this.selectedMemberIds()
    });
    this.router.navigate(['/groups', this.groupId()]);
  }
}

