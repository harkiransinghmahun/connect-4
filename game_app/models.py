from django.db import models
from django.urls import reverse

# Create your models here.
class Game(models.Model):

    player_1_name = models.CharField(max_length=50)
    player_2_name = models.CharField(max_length=50)

    def __str__(self):
        return f"Game {self.pk}"

    def get_absolute_url(self):
        return reverse("game_app:game")


class Score(models.Model):
    player_name = models.CharField(max_length=50)
    moves = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.player_name} {self.moves}"

    def get_absolute_url(self):
        return reverse("game_app:create")
