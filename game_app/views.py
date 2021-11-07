from django.shortcuts import render
from django.views.generic import CreateView, ListView
from game_app import models

# Create your views here.
def index(request):
    return render(request, 'game_app/index.html', {})


# def game(request):
#     my_object = models.Game.objects.last()
#     my_dict = {'player1' : my_object.player_1_name, 'player2' : my_object.player_2_name}
#     return render(request, 'game_app/connect_four.html', context=my_dict)

class ScoreListView(ListView):
    # context_object_name = 'scores'
    model = models.Score
    template_name = 'game_app/leaders_board.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['scores'] = models.Score.objects.order_by('moves')[0:10]
        return context


class ScoreCreateView(CreateView):
    model = models.Score
    fields = "__all__"
    template_name = "game_app/connect_four.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['player1'] = models.Game.objects.last().player_1_name
        context['player2'] = models.Game.objects.last().player_2_name
        return context


class GameCreateView(CreateView):
    fields = "__all__"
    model = models.Game
