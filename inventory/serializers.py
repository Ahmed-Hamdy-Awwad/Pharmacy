from rest_framework import serializers
from .models import *

class Serializer(serializers.ModelSerializer):

    class Meta:
        model = Items
        fields = ('pk', 'name', 'itemCode', 'description', 'qty')

class TrxSerializer(serializers.ModelSerializer):

    class Meta:
        model = Transactions
        fields = ('pk', 'qty', 'trxType', 'trxDate', 'itemCode')