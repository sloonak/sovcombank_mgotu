from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    role_id = db.Column(db.Integer, index=True)
    username = db.Column(db.String(64), index=True)
    email = db.Column(db.String(120), index=True)
    password_hash = db.Column(db.String(128))

    def __repr__(self):
        return '<User {}>'.format(self.username) 


class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True)
    right_level = db.Column(db.Integer, index=True)
    description = db.Column(db.Text)

    def __repr__(self):
        return '<Role {}>'.format(self.name) 


class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True)
    right_level = db.Column(db.Integer, index=True)
    description = db.Column(db.Text)

    def __repr__(self):
        return '<Role {}>'.format(self.name) 

