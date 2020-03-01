# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import *
from .serializers import *

# Create your views here.

@api_view(['GET', 'POST'])
def listItem(request):

	if request.method == 'GET':
		items = Items.objects.all()
		print items[0].qty
		serializer = Serializer(items, context={'request': request}, many=True)
		return Response({'data': serializer.data})
	
	elif request.method == 'POST':
		newItem = Items()
		newItem.itemCode = request.data['itemCode']
		newItem.description = request.data['desc']
		newItem.name = request.data['name']
		newItem.qty = request.data['qty']
		newItem.save()
		print newItem
	
	return Response(status = status.HTTP_201_CREATED)

@api_view(['GET', 'POST'])
def listTrx(request):

	if request.method == 'POST':
		item = request.data['itemCode']
		print item
		trx = Transactions.objects.filter(itemCode=item)
		print trx
		serializer = TrxSerializer(trx, context={'request': request}, many=True)
		return Response({'data': serializer.data})