# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import *
from .serializers import *
import numpy

# Create your views here.

@api_view(['GET', 'POST'])
def listItem(request):

	if request.method == 'GET':
		items = Items.objects.all()
		serializer = Serializer(items, context={'request': request}, many=True)
		return Response({'data': serializer.data})
	
	elif request.method == 'POST':
		newItem = Items()
		newItem.itemCode = request.data['itemCode']
		newItem.description = request.data['desc']
		newItem.name = request.data['name']
		newItem.qty = request.data['qty']
		newItem.save()
	
	return Response(status = status.HTTP_201_CREATED)

@api_view(['POST'])
def listTrx(request):

	if request.method == 'POST':
		item = request.data['itemCode']
		trx = Transactions.objects.filter(itemCode=item)
		serializer = TrxSerializer(trx, context={'request': request}, many=True)
		return Response({'data': serializer.data})

@api_view(['POST'])
def createTrx(request):

	if request.method == 'POST':
		itemCode = request.data['itemCode']
		item = Items.objects.get(itemCode = itemCode)
		qty = int(request.data['qty'])
		trx = Transactions()
		trx.itemCode = item
		trx.trxType = request.data['trxType']
		if trx.trxType == 'DISP':
			trx.qty = numpy.negative(qty)
		else:
			trx.qty = qty
		trx.save()
		item.qty = item.qty + trx.qty
		item.save()
	return Response(status = status.HTTP_201_CREATED)