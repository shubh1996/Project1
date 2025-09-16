import { Injectable, signal } from '@angular/core';
import { AppState, Expense, Group, User } from './models';
import { generateId } from './utils';

const STORAGE_KEY = 'splitwise-lite-state-v1';

function loadState(): AppState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AppState;
  } catch {
    return null;
  }
}

function saveState(state: AppState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

@Injectable({ providedIn: 'root' })
export class StateService {
  private readonly stateSig = signal<AppState>(
    loadState() ?? {
      users: [
        { id: 'u_alex', name: 'Alex' },
        { id: 'u_bailey', name: 'Bailey' },
        { id: 'u_casey', name: 'Casey' }
      ],
      groups: [
        { id: 'g_home', name: 'Home', memberIds: ['u_alex', 'u_bailey', 'u_casey'] }
      ],
      expenses: []
    }
  );

  readonly state = this.stateSig.asReadonly();

  private persist() {
    saveState(this.stateSig());
  }

  addUser(name: string): User {
    const user: User = { id: generateId('u'), name };
    const next = { ...this.stateSig(), users: [...this.stateSig().users, user] };
    this.stateSig.set(next);
    this.persist();
    return user;
  }

  addGroup(name: string, memberIds: string[]): Group {
    const group: Group = { id: generateId('g'), name, memberIds: [...new Set(memberIds)] };
    const next = { ...this.stateSig(), groups: [...this.stateSig().groups, group] };
    this.stateSig.set(next);
    this.persist();
    return group;
  }

  addExpense(expense: Omit<Expense, 'id' | 'dateIso'> & { dateIso?: string }): Expense {
    const full: Expense = {
      ...expense,
      id: generateId('e'),
      dateIso: expense.dateIso ?? new Date().toISOString()
    };
    const next = { ...this.stateSig(), expenses: [full, ...this.stateSig().expenses] };
    this.stateSig.set(next);
    this.persist();
    return full;
  }

  getGroup(id: string): Group | undefined {
    return this.stateSig().groups.find((g) => g.id === id);
  }

  getUser(id: string): User | undefined {
    return this.stateSig().users.find((u) => u.id === id);
  }
}

