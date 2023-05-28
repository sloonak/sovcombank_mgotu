from flask import Blueprint
from app import app, request, db
from app.models.user import User


user_main = Blueprint('user_main', __name__, url_prefix='/api/user')


@user_main.route('/user_create', methods=['POST'])
def user_create():
    # req_data = request.get_json(user_id)

    new_user = User()
    db.session.add(new_user)
    db.session.commit()

    return {
        "success": True,
        "msg": "Пользователь создан",
        "user": new_user.to_dict()
    }, 200


@user_main.route('/user_update/<user_id>', methods=['POST'])
def user_update(user_id):
    req_data = request.get_json()

    _name = req_data.get("name")
    _birthday = req_data.get("birthday")
    _city = req_data.get("city")
    _phone = req_data.get("phone")
    _job_title = req_data.get("job_title")
    _education = req_data.get("education")
    _exp = req_data.get("exp")
    _curses = req_data.get("curses")
    _about = req_data.get("about")
    _salary = req_data.get("salary")
    _exp = req_data.get("exp")

    user = User.query.filter_by(id=user_id).first()

    user.name = _name
    user.birthday = _birthday
    user.city = _city
    user.phone = _phone
    user.job_title = _job_title
    user.education = _education
    user.exp = _exp
    user.curses = _curses
    user.about = _about
    user.salary = _salary

    db.session.commit()


    return {
        "success": True,
        "msg": "Пользователь обновлен",
        "id": user.id
    }, 200


@user_main.route('/get_user/<user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.filter_by(id=user_id).first()

    if user:
        return {
            "success": True,
            "user": user.to_dict(),
            "user_id": user.id
        }, 200

    else:
        return {
            "success": True,
            "msg": "Ошибка",
        }, 500