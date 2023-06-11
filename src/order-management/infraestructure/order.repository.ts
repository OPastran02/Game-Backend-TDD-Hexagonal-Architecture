import { IOrderRepository } from '../domain/interfaces/order.interface';
import { Order } from '../domain/order';
import prisma from '../../../prisma/index';

export class OrderRepositoryPrismaSqlite implements IOrderRepository {
  public async addOrder(pelotudo: Order): Promise<Order> {
    return prisma.orders.create({
      data: {
        orderId: pelotudo.orderId,
        total: pelotudo.total,
        productId: pelotudo.productId,
        createdAt: pelotudo.createdAt
      }
    })
  }
}