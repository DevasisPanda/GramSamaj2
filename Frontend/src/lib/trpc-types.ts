import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { z } from 'zod';

const t = initTRPC.create({
  transformer: superjson,
});
const router = t.router;
const publicProcedure = t.procedure;

export const appRouter = router({
  auth: router({
    login: publicProcedure
      .input(z.object({ email: z.string(), password: z.string() }))
      .mutation(async () => {
        return {} as {
          token: string;
          user: {
            id: number;
            name: string;
            email: string;
            role: string;
            phone?: string;
            status?: string;
            isSystemAdmin?: boolean;
            createdAt?: Date;
          };
        };
      }),
    register: publicProcedure
      .input(z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
        phone: z.string().optional(),
      }))
      .mutation(async () => ({ success: true })),
    logout: publicProcedure.mutation(async () => ({ success: true })),
    me: publicProcedure.query(async () => {
      return null as {
        id: number;
        name: string;
        email: string;
        role: string;
        phone?: string;
        status?: string;
        isSystemAdmin?: boolean;
        createdAt?: Date;
      } | null;
    }),
    createHandoff: publicProcedure.mutation(async () => ({ code: '', handoffCode: '' })),
    changePassword: publicProcedure
      .input(z.object({ oldPassword: z.string().optional(), newPassword: z.string().optional() }))
      .mutation(async () => ({ success: true })),
  }),
  admin: router({
    getDashboardStats: publicProcedure.query(async () => {
      return {} as {
        totalMembers?: number;
        totalDonations?: number;
        totalExpenses?: number;
        totalEvents?: number;
      };
    }),
  }),
  beneficiary: router({
    getAll: publicProcedure.query(async () => [] as any[]),
    create: publicProcedure
      .input(z.object({
        name: z.string(),
        phone: z.string().optional(),
        address: z.string().optional(),
        category: z.string().optional(),
      }))
      .mutation(async () => ({ success: true })),
  }),
  event: router({
    getAll: publicProcedure.query(async () => [] as any[]),
    create: publicProcedure
      .input(z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        date: z.string().or(z.date()).optional(),
        eventDate: z.string().or(z.date()).optional(),
        location: z.string().optional(),
        category: z.string().optional(),
        status: z.string().optional(),
      }))
      .mutation(async () => ({ success: true })),
    update: publicProcedure
      .input(z.object({
        id: z.number().or(z.string()),
        title: z.string().optional(),
        description: z.string().optional(),
        date: z.string().or(z.date()).optional(),
        eventDate: z.string().or(z.date()).optional(),
        location: z.string().optional(),
        category: z.string().optional(),
        status: z.string().optional(),
        isCompleted: z.boolean().optional(),
      }))
      .mutation(async () => ({ success: true })),
    updateStatus: publicProcedure
      .input(z.object({
        id: z.number().or(z.string()),
        status: z.string(),
      }))
      .mutation(async () => ({ success: true })),
    delete: publicProcedure
      .input(z.object({ id: z.number().or(z.string()) }))
      .mutation(async () => ({ success: true })),
  }),
  donation: router({
    getAll: publicProcedure
      .input(z.object({ page: z.number().optional(), pageSize: z.number().optional() }).optional())
      .query(async () => ({ items: [] as any[], total: 0 })),
    getRecentPublic: publicProcedure.query(async () => [] as any[]),
    create: publicProcedure
      .input(z.object({
        amount: z.number(),
        name: z.string().optional(),
        email: z.string().optional(),
        phone: z.string().optional(),
        donorName: z.string().optional(),
        donorEmail: z.string().optional(),
        donorPhone: z.string().optional(),
        purpose: z.string().optional(),
        paymentMethod: z.string().optional(),
        paymentMode: z.string().optional(),
      }))
      .mutation(async () => ({ success: true })),
    createPublic: publicProcedure
      .input(z.object({
        amount: z.number(),
        name: z.string().optional(),
        email: z.string().optional(),
        phone: z.string().optional(),
        donorName: z.string().optional(),
        donorEmail: z.string().optional(),
        donorPhone: z.string().optional(),
        purpose: z.string().optional(),
        paymentMethod: z.string().optional(),
        paymentMode: z.string().optional(),
      }))
      .mutation(async () => ({ success: true })),
  }),
  membership: router({
    applyMembership: publicProcedure
      .input(z.object({
        name: z.string(),
        email: z.string(),
        phone: z.string().optional(),
        aadharNumber: z.string().optional(),
        membershipType: z.string().optional(),
      }))
      .mutation(async () => ({ membershipNumber: 'AIRD-001' })),
    getMyMembership: publicProcedure.query(async () => null as any),
  }),
  gallery: router({
    getAll: publicProcedure.query(async () => [] as any[]),
    adminGetAll: publicProcedure.query(async () => [] as any[]),
    getPublic: publicProcedure.query(async () => [] as any[]),
    create: publicProcedure
      .input(z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        imageUrl: z.string().optional(),
        redirectUrl: z.string().optional(),
        mediaType: z.enum(['image', 'video']).optional(),
        category: z.string().optional(),
      }))
      .mutation(async () => ({ success: true })),
    update: publicProcedure
      .input(z.object({
        id: z.number().or(z.string()),
        title: z.string().optional(),
        description: z.string().optional(),
        imageUrl: z.string().optional(),
        redirectUrl: z.string().optional(),
        mediaType: z.enum(['image', 'video']).optional(),
        category: z.string().optional(),
      }))
      .mutation(async () => ({ success: true })),
    add: publicProcedure
      .input(z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        url: z.string().optional(),
        category: z.string().optional(),
      }))
      .mutation(async () => ({ success: true })),
    delete: publicProcedure
      .input(z.object({ id: z.number().or(z.string()) }))
      .mutation(async () => ({ success: true })),
  }),
  upload: router({
    image: publicProcedure
      .input(z.object({
        base64: z.string().optional(),
        imageBase64: z.string().optional(),
        filename: z.string().optional(),
        folder: z.string().optional(),
      }))
      .mutation(async () => ({ url: '', key: '' })),
    uploadImage: publicProcedure
      .input(z.object({
        base64: z.string().optional(),
        imageBase64: z.string().optional(),
        filename: z.string().optional(),
        folder: z.string().optional(),
      }))
      .mutation(async () => ({ url: '', key: '' })),
  }),
  enquiry: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string(),
        email: z.string(),
        phone: z.string().optional(),
        subject: z.string().optional(),
        message: z.string(),
      }))
      .mutation(async () => ({ success: true })),
  }),
});

export type AppRouter = typeof appRouter;
