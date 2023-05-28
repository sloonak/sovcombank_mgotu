from app import db
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

class Test(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, index=True)
    company_id = db.Column(db.Integer, index=True)
    title = db.Column(db.String(64), index=True)


class Scale(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    test_id = db.Column(db.Integer, index=True)
    user_id = db.Column(db.Integer, index=True)
    company_id = db.Column(db.Integer, index=True)
    name = db.Column(db.String(64), index=True)    


class Test_scale(db.Model):
    __tablename__ = 'test_scale'

    id = db.Column(db.Integer, primary_key=True)
    test_id = db.Column(db.Integer, index=True)
    scale_id = db.Column(db.Integer, index=True)


class Test_question(db.Model):
    __tablename__ = 'test_question'

    id = db.Column(db.Integer, primary_key=True)
    test_id = db.Column(db.Integer, index=True)
    question = db.Column(db.Text)
    question_type = db.Column(db.String(64), index=True)


class Test_question_option(db.Model):
    __tablename__ = 'test_question_option'

    id = db.Column(db.Integer, primary_key=True)
    test_question_id = db.Column(db.Integer, index=True)
    option = db.Column(db.Text)


class Test_question_answer(db.Model):
    __tablename__ = 'test_question_answer'

    id = db.Column(db.Integer, primary_key=True)
    test_question_id = db.Column(db.Integer, index=True)
    scale_id = db.Column(db.Integer, index=True)
    answer = db.Column(db.String(64))
    balls = db.Column(db.Integer, index=True)