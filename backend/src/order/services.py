from order import models as order_models
from django.db import transaction


class OrderService:
    def new_bill(self):
        order_models.Bill.objects.create()

    @transaction.atomic
    def add_order_to_bill(self, bill, products, user):
        order = order_models.Order.objects.create(
            **{
                'bill': bill,
                'user': user
            }
        )
        order.products.set(products)
        bill.amount += order.amount
        bill.save()

    def close_bill(self, bill):
        bill.is_open = False
        bill.save()
