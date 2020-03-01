# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Items(models.Model):
	
	itemCode = models.CharField(primary_key=True, max_length=255)
	name = models.CharField(max_length=255)
	description = models.CharField(max_length=255)
	qty = models.IntegerField()

	def __str__(self):
		return self.itemCode

class Transactions(models.Model):
	
	qty = models.IntegerField()
	DISPATCH = 'DISP'
	ADDITION = 'ADD'
	TRX_TYPE_CHOICES = [
		(DISPATCH, 'Dispatch'),
		(ADDITION, 'Addition')
	]
	trxType = models.CharField(choices=TRX_TYPE_CHOICES, default=DISPATCH, max_length=255)
	trxDate = models.DateTimeField().auto_now_add
	itemCode = models.ForeignKey(Items, on_delete=models.CASCADE)