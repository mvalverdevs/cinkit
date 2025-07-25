from order import models as order_models
from product import models as product_models
from django.db import transaction
from datetime import datetime


class BillService:

    @staticmethod
    @transaction.atomic
    def add_order_to_bill(bill, order_items, user):
        # Create order
        order = order_models.Order.objects.create(
            **{
                'bill': bill,
                'user': user
            }
        )

        # Create order items
        order_amount = 0
        for item in order_items:
            order_models.OrderItem.objects.create(
                **{
                    'order': order,
                    'product_id': item.get('product'),
                    'quantity': item.get('quantity'),
                    'note': item.get('note'),
                }
            )
            product = product_models.Product.objects.get(id=item.get('product'))
            order_amount += product.price * item.get('quantity')

        # Set order amount
        order.amount = order_amount
        order.save()

        # Updates bill amount
        bill.amount += order_amount
        bill.save()

        return order

    @staticmethod
    @transaction.atomic
    def close_bill(bill):
        bill.is_open = False
        bill.closed_at = datetime.now()
        bill.save()
        return bill


class OrderService:

    @staticmethod
    @transaction.atomic
    def set_order_as_delivered(order):
        order.delivered = True
        order.delivered_at = datetime.now()
        order.save()
        return order