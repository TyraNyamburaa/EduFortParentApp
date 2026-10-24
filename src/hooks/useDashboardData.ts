import { useQuery } from '@tanstack/react-query';
import { supabase } from '../utils/supabase';

export function useDashboardData() {
  return useQuery({
    queryKey: ['dashboard_summary'],
    queryFn: async () => {
      if (__DEV__) {
        return {
          children: [
            { id: '1', full_name: 'Chelsy Kerubo', grade_class: '6', school_name: 'Peter Kibukosya Primary School' },
          ],
          ledgerItems: [
            { id: '1', child_id: '1', amount_due: 15000, amount_paid: 1200 },
            { id: '2', child_id: '1', amount_due: 4500, amount_paid: 4500 },
          ],
          transactions: [
            { id: '1', type: 'SAVINGS', amount: 500, created_at: '2025-01-15T10:30:00Z' },
            { id: '2', type: 'FEE_PAYMENT', amount: 1200, created_at: '2025-01-14T14:20:00Z' },
            { id: '3', type: 'SAVINGS', amount: 250, created_at: '2025-01-13T08:45:00Z' },
          ],
          aggregates: {
            totalTermFees: 15000,
            totalFamilySavings: 1200,
            remainingBalance: 13800,
            completionPercentage: 8.0,
          },
        };
      }

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User context session missing');

      // 1. Fetch children profiles linked to parent
      const { data: children, error: childErr } = await supabase
        .from('children')
        .select('*')
        .eq('parent_id', user.id);
      if (childErr) throw childErr;

      // 2. Fetch all active fee installments for children
      const childIds = children.map(c => c.id);
      let ledgerItems: any[] = [];
      if (childIds.length > 0) {
        const { data: ledger, error: ledgErr } = await supabase
          .from('fee_ledger')
          .select('*')
          .in('child_id', childIds);
        if (ledgErr) throw ledgErr;
        ledgerItems = ledger;
      }

      // 3. Fetch recent micro-savings transactions
      const { data: transactions, error: txErr } = await supabase
        .from('transactions')
        .select('*')
        .eq('parent_id', user.id)
        .order('created_at', { ascending: false })
        .limit(3);
      if (txErr) throw txErr;

      // Calculate aggregated parameters locally on client
      const totalTermFees = ledgerItems.reduce((acc, curr) => acc + Number(curr.amount_due), 0);
      const totalFamilySavings = ledgerItems.reduce((acc, curr) => acc + Number(curr.amount_paid), 0);
      const remainingBalance = totalTermFees - totalFamilySavings;
      const completionPercentage = totalTermFees > 0 ? (totalFamilySavings / totalTermFees) * 100 : 0;

      return {
        children,
        ledgerItems,
        transactions,
        aggregates: {
          totalTermFees,
          totalFamilySavings,
          remainingBalance,
          completionPercentage
        }
      };
    },
    staleTime: 1000 * 60 * 5, // Fresh for 5 minutes
    gcTime: 1000 * 60 * 60 * 24, // Keep in offline cache for 24 hours
  });
}
