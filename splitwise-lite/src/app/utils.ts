import { Expense, BalanceSummary } from './models';

export function calculateGroupBalances(expenses: Expense[], memberIds: string[]): BalanceSummary {
  const balances: BalanceSummary = {};
  for (const memberId of memberIds) {
    balances[memberId] = 0;
  }

  for (const expense of expenses) {
    if (!memberIds.includes(expense.paidByUserId)) continue;
    const included = expense.splitMemberIds.filter((id) => memberIds.includes(id));
    if (included.length === 0) continue;
    const share = expense.amount / included.length;

    // Payer paid the full amount; others owe their share
    for (const memberId of included) {
      if (memberId === expense.paidByUserId) {
        balances[memberId] += expense.amount - share; // net they are owed by others
      } else {
        balances[memberId] -= share; // they owe the payer
      }
    }
  }

  // Round to 2 decimals for display
  for (const id of Object.keys(balances)) {
    balances[id] = Math.round(balances[id] * 100) / 100;
  }

  return balances;
}

export function generateId(prefix: string = 'id'): string {
  const rand = Math.random().toString(36).slice(2, 8);
  const ts = Date.now().toString(36).slice(-6);
  return `${prefix}_${ts}_${rand}`;
}

