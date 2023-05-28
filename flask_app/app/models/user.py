from app import db
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy_serializer import SerializerMixin

class User(UserMixin, db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    role_id = db.Column(db.Integer, index=True)
    username = db.Column(db.String(64), index=True)
    email = db.Column(db.String(120), index=True)
    password_hash = db.Column(db.String(128))
    phone = db.Column(db.String(12), index=True)
    token = db.Column(db.String(128), index=True)
    name = db.Column(db.String(128), index=True)
    last_name = db.Column(db.String(128), index=True)
    surname = db.Column(db.String(128))
    birthday = db.Column(db.String(128))
    sity = db.Column(db.Text, index=True)
    job_title = db.Column(db.Text, index=True)
    education = db.Column(db.Text, index=True)
    exp = db.Column(db.Text, index=True)
    courses = db.Column(db.Text, index=True)
    salary = db.Column(db.Text, index=True)
    about = db.Column(db.Text, index=True)


    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return '<User {}>'.format(self.username) 


class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True)
    right_level = db.Column(db.Integer, index=True)
    description = db.Column(db.Text)

    def __repr__(self):
        return '<Role {}>'.format(self.name) 


class Right_level_access(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    functional_name = db.Column(db.String(64), index=True)
    right_level = db.Column(db.Integer, index=True)

    def get_all_functionals(self, right_level):
        # all_functionals=self.query.filter_by(right_level<right_level)

        return True

    def __repr__(self):
        return '<Right level {}>'.format(self.functional_name) 