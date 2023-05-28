from app import db

class Direction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True)

    def get_direction_by_name(self, name):
        direction = self.query.filter_by(name=name).reset()

        return direction

    def __repr__(self):
        return '<Direction {}>'.format(self.name) 


class Resume(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, index=True)
    direction_id = db.Column(db.Integer, index=True)
    name = db.Column(db.String(64), index=True)
    description = db.Column(db.Text)
    email = db.Column(db.String(120), index=True)
    social_network = db.Column(db.Text)


    def get_all_resume_user(self, user_id):
        all_resume = self.query.filter_by(user_id=user_id)

        return all_resume


    def __repr__(self):
        return '<Resume {}>'.format(self.name) 


