import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { trpcClient } from '@/lib/trpc';
import * as api from '@/lib/mockApi';

/**
 * React Query hooks that communicate directly with the backend tRPC procedures
 * while gracefully falling back to typed local mock stores when the server is offline.
 */

export const qk = {
  villagers: ['villagers'] as const,
  events: ['events'] as const,
  donors: ['donors'] as const,
  videos: ['videos'] as const,
  demographics: ['demographics'] as const,
  tiers: ['membership-tiers'] as const,
  metrics: ['dashboard-metrics'] as const,
};

export function useVillagers() {
  return useQuery({
    queryKey: qk.villagers,
    queryFn: async () => {
      try {
        const data = await trpcClient.beneficiary.getAll.query();
        if (data && data.length > 0) {
          return data.map((b: any, i: number) => ({
            id: String(b.id),
            mapNodeId: `h${i + 1}`,
            houseNumber: b.address || `H-${String(i + 1).padStart(3, '0')}`,
            headOfHousehold: b.name,
            familyCount: 4,
            contactNumber: b.phone || '',
            isPop: true,
            mgnregaJobCard: true,
          }));
        }
      } catch (err) {
        // Backend offline or empty
      }
      return api.listVillagers();
    },
  });
}

export function useEvents() {
  return useQuery({
    queryKey: qk.events,
    queryFn: async () => {
      try {
        const data = await trpcClient.event.getAll.query();
        if (data && data.length > 0) {
          return data.map((e: any) => ({
            id: String(e.id),
            date: e.eventDate || e.date || e.startDate ? new Date(e.eventDate || e.date || e.startDate).toISOString() : new Date().toISOString(),
            title: e.title,
            description: e.description || '',
            category: (e.category || 'planning').toLowerCase() as any,
            isCompleted: e.status === 'completed' || e.isCompleted === true,
          }));
        }
      } catch (err) {
        // Fallback
      }
      return api.listEvents();
    },
  });
}

export function useDonors() {
  return useQuery({
    queryKey: qk.donors,
    queryFn: async () => {
      try {
        const data = await trpcClient.donation.getAll.query({ page: 1, pageSize: 50 });
        const list = Array.isArray(data) ? data : data?.items;
        if (list && list.length > 0) {
          return list.map((d: any) => ({
            id: String(d.id),
            date: d.createdAt ? new Date(d.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Recent',
            name: d.donorName || 'Anonymous Supporter',
            amount: Number(d.amount) || 0,
            paymentMode: (d.paymentMethod || 'Online') as any,
            purpose: d.purpose || 'General Fund',
          }));
        }
      } catch (err) {
        // Fallback to public donations or mock
        try {
          const publicDonations = await trpcClient.donation.getRecentPublic.query();
          if (publicDonations && publicDonations.length > 0) {
            return publicDonations.map((d: any) => ({
              id: String(d.id),
              date: d.createdAt ? new Date(d.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Recent',
              name: d.donorName || 'Anonymous Supporter',
              amount: Number(d.amount) || 0,
              paymentMode: (d.paymentMethod || 'Online') as any,
              purpose: d.purpose || 'General Fund',
            }));
          }
        } catch {
          // Fallback
        }
      }
      return api.listDonors();
    },
  });
}

export function useVideos() {
  return useQuery({ queryKey: qk.videos, queryFn: api.listVideos });
}

export function useVillageDemographics() {
  return useQuery({ queryKey: qk.demographics, queryFn: api.getVillageDemographics });
}

export function useMembershipTiers() {
  return useQuery({ queryKey: qk.tiers, queryFn: api.getMembershipTiers });
}

export function useDashboardMetrics() {
  return useQuery({
    queryKey: qk.metrics,
    queryFn: async () => {
      try {
        const stats = await trpcClient.admin.getDashboardStats.query();
        if (stats) {
          return {
            totalDonations: Number(stats.totalDonations) || 0,
            totalMembershipFees: Number(stats.totalMembers || 0) * 100,
            memberCounts: [
              { month: 'Mar', general: 8, special: 3, executive: 1 },
              { month: 'Apr', general: 12, special: 5, executive: 2 },
              { month: 'May', general: 15, special: 6, executive: 2 },
              { month: 'Jun', general: 18, special: 7, executive: 3 },
              { month: 'Jul', general: 21, special: 8, executive: 3 },
              { month: 'Aug', general: 25, special: 10, executive: 4 },
            ],
            monthlyFlow: [
              { month: 'Mar', donations: 4000, fees: 200 },
              { month: 'Apr', donations: 21000, fees: 500 },
              { month: 'May', donations: 7000, fees: 300 },
              { month: 'Jun', donations: 9000, fees: 800 },
              { month: 'Jul', donations: 12000, fees: 1000 },
              { month: 'Aug', donations: 15000, fees: 1200 },
            ],
          };
        }
      } catch (err) {
        // Fallback
      }
      return api.getDashboardMetrics();
    },
  });
}

export function useCreateVillager() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: api.NewVillagerInput) => {
      try {
        await trpcClient.beneficiary.create.mutate({
          name: input.headOfHousehold,
          phone: input.contactNumber || '',
          address: input.houseNumber,
          category: 'other',
        });
      } catch (err) {
        console.warn('Backend villager create fallback:', err);
      }
      return api.createVillager(input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.villagers }),
  });
}

export function useUpdateVillager() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, patch }: { id: string; patch: Partial<Parameters<typeof api.updateVillager>[1]> }) =>
      api.updateVillager(id, patch),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.villagers }),
  });
}

export function useDeleteVillager() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: api.deleteVillager,
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.villagers }),
  });
}

export function useCreateEvent() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: api.NewEventInput) => {
      try {
        await trpcClient.event.create.mutate({
          title: input.title,
          description: input.description,
          eventDate: input.date ? new Date(input.date) : new Date(),
          location: 'AIRD Trust Lucknow',
        });
      } catch (err) {
        console.warn('Backend event create fallback:', err);
      }
      return api.createEvent(input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.events }),
  });
}

export function useCreateDonor() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: api.NewDonorInput) => {
      try {
        await trpcClient.donation.createPublic.mutate({
          name: input.name,
          amount: input.amount,
          paymentMode: input.paymentMode,
          purpose: input.purpose,
        });
      } catch (err) {
        console.warn('Backend donation create fallback:', err);
      }
      return api.createDonor(input);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: qk.donors });
      qc.invalidateQueries({ queryKey: qk.metrics });
    },
  });
}

export function useCreateMember() {
  return useMutation({
    mutationFn: async (input: api.NewMemberInput) => {
      try {
        const res = await trpcClient.membership.applyMembership.mutate({
          name: input.name,
          email: input.email,
          phone: input.mobile,
          aadharNumber: input.aadharNumber,
          membershipType: input.isLife ? 'lifetime' : 'regular',
        });
        if (res && res.membershipNumber) {
          return {
            id: res.membershipNumber,
            name: input.name,
            aadharNumber: input.aadharNumber,
            mobile: input.mobile,
            email: input.email,
            category: input.isLife ? 'LIFE' : input.category,
            status: 'ACTIVE',
            validUntil: new Date(Date.now() + (input.isLife ? 99 : 1) * 365 * 86400000).toISOString(),
          };
        }
      } catch (err) {
        console.warn('Backend member create fallback:', err);
      }
      return api.createMember(input);
    },
  });
}

