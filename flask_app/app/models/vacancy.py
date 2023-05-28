from app import db

class Vacancy(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, index=True)
    direction_id = db.Column(db.Integer, index=True)
    name = db.Column(db.String(64), index=True)
    description = db.Column(db.Text)
    email = db.Column(db.String(120), index=True)
    social_network = db.Column(db.Text)

    def __repr__(self):
        return '<Resume {}>'.format(self.name) 