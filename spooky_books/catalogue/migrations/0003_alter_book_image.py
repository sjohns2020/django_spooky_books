# Generated by Django 4.2.6 on 2023-10-29 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("catalogue", "0002_book_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="book",
            name="image",
            field=models.CharField(
                default="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dplaceholder&psig=AOvVaw3sVy2QOfSKNrFs_4UyRpxD&ust=1698683256146000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJC9qrPWm4IDFQAAAAAdAAAAABAE",
                max_length=255,
            ),
        ),
    ]
