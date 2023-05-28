from flask import Blueprint
from app import db, app

auth = Blueprint('auth', __name__)

@auth.route('/api/login')
def login():
    return 'Login'


@auth.route('/signup')
def signup():
    return 'Signup'


@auth.route('/logout')
def logout():
    return 'Logout'