from django.conf.urls import url, include
from django.contrib import admin
from game_app import views

app_name = 'game_app'
urlpatterns = [
    # url(r'^connect_four/', views.game, name="game"),
    url(r'^create/', views.GameCreateView.as_view(), name="create"),
    url(r'^connect_four/', views.ScoreCreateView.as_view(), name="game"),
    url(r'^leaders_board/', views.ScoreListView.as_view(), name="scores")
]
