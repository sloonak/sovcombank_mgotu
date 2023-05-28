from flask_restx import Api, Resource, fields
import jwt
from flask_login import current_user, login_user, logout_user
# from app.models import User
from app import app, request, db


from app.auth.auth import auth
app.register_blueprint(auth)
 

from app.test.test_creator import test_creator
app.register_blueprint(test_creator)

from app.user.user_main import user_main
app.register_blueprint(user_main)

# from app.user.vacancy_creator import vacancy_creator
# app.register_blueprint(vacancy_creator)
