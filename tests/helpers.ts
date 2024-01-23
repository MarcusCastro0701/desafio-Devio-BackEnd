import { prisma } from '@/config';

export async function cleanDb() {
  await prisma.event.deleteMany({});
  await prisma.orders.deleteMany({});
}
