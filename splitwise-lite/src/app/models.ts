export interface User {
  id: string;
  name: string;
}

export interface Group {
  id: string;
  name: string;
  memberIds: string[];
}

export interface ExpenseShare {
  userId: string;
  amount: number; // positive amount user owes (for simplicity we will compute equally by default)
}

export interface Expense {
  id: string;
  groupId: string;
  description: string;
  paidByUserId: string;
  amount: number;
  dateIso: string;
  splitMemberIds: string[]; // members included in the split
}

export interface AppState {
  users: User[];
  groups: Group[];
  expenses: Expense[];
}

export interface BalanceSummaryItem {
  userId: string;
  balance: number; // positive means others owe them, negative means they owe others
}

export type BalanceSummary = Record<string, number>;

