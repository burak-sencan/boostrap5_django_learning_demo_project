from django.urls import path
from . import views

app_name = "dashboard"

urlpatterns = [
    path("index_1/", views.index_1, name="index_1"),
    path("index_2/", views.index_2, name="index_2"),
    path("index_3/", views.index_3, name="index_3"),
    path("index_4/", views.index_4, name="index_4"),
    path("index_5/", views.index_5, name="index_5"),
    path("index_6/", views.index_6, name="index_6"),
    path("add_event/", views.add_event, name="add_event"),
    path("profile/", views.profile, name="profile"),
]
