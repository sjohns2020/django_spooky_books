# Generated by Django 4.2.6 on 2023-10-31 23:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("catalogue", "0004_alter_book_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="book",
            name="publication_year",
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
