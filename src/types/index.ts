export interface Profile {
  id: string;
  full_name: string | null;
  email: string | null;
  updated_at: string;
}

export interface Child {
  id: string;
  parent_id: string;
  full_name: string;
  school_name: string;
  grade_class: string | null;
  student_id: string | null;
  created_at: string;
  last_synced_at: string;
}

export interface FeeLedgerItem {
  id: string;
  child_id: string;
  title: string;
  amount_due: number;
  amount_paid: number;
  due_date: string;
  status: 'UNPAID' | 'PARTIAL' | 'PAID';
  updated_at: string;
}

export interface SavingsGoal {
  id: string;
  parent_id: string;
  child_id: string | null;
  goal_name: string;
  target_amount: number;
  current_balance: number;
  target_date: string | null;
  automation_rules: {
    frequency?: 'weekly' | 'monthly';
    amount?: number;
  };
  status: 'ACTIVE' | 'COMPLETED' | 'PAUSED';
  updated_at: string;
}
