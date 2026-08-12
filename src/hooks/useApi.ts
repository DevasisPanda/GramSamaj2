import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import * as api from '@/lib/mockApi';

/**
 * React Query hooks over the mock data layer. The query/mutation keys are
 * namespaced so cache invalidation is predictable. When the tRPC backend is
 * connected, these wrappers are replaced 1:1 by `trpc.<proc>` calls.
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
  return useQuery({ queryKey: qk.villagers, queryFn: api.listVillagers });
}
export function useEvents() {
  return useQuery({ queryKey: qk.events, queryFn: api.listEvents });
}
export function useDonors() {
  return useQuery({ queryKey: qk.donors, queryFn: api.listDonors });
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
  return useQuery({ queryKey: qk.metrics, queryFn: api.getDashboardMetrics });
}

export function useCreateVillager() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: api.createVillager,
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
    mutationFn: api.createEvent,
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.events }),
  });
}

export function useCreateDonor() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: api.createDonor,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: qk.donors });
      qc.invalidateQueries({ queryKey: qk.metrics });
    },
  });
}

export function useCreateMember() {
  return useMutation({ mutationFn: api.createMember });
}
