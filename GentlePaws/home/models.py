from django.db import models

# HOME SECTION

class feature(models.Model):
    price= models.DecimalField(max_digits=10, decimal_places=2)
    name = models.CharField(max_length=20)
    description = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class newrealeases(models.Model):
    actual_price= models.DecimalField(max_digits=10, decimal_places=2)
    discount_price= models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='images/')
    name = models.CharField(max_length=20)


#  Dog food section

# class About(models.Model):
#     heading = models.CharField(max_length=50)
#     career = models.CharField(max_length=25)
#     description = models.TextField(blank=False)
#     profile_img = models.ImageField(upload_to='profile/')

#     updated = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return self.career


# class Profile(models.Model):
#     about = models.ForeignKey(About, on_delete=models.CASCADE, related_name='profile_set')
#     social_name = models.CharField(max_length=10)
#     link = models.URLField(max_length=200)




# # SKILLS SECTION

# class Category(models.Model):
#     name = models.CharField(max_length=20)

#     updated = models.DateTimeField(auto_now=True)

#     class Meta:
#         verbose_name = 'Skill'
#         verbose_name_plural = 'Skills'

#     def __str__(self):
#         return self.name

# class Skills(models.Model):
#     category = models.ForeignKey(Category, on_delete=models.CASCADE)
#     skill_name = models.CharField(max_length=20)

    

# # PORTFOLIO SECTION

# class Portfolio(models.Model):
#     image = models.ImageField(upload_to='portfolio/')
#     link = models.URLField(max_length=200)

#     def __str__(self):
#         return f'Portfolio {self.id}'

