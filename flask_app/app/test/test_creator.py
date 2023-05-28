from flask import Blueprint
import jwt
from app.models.test import Test, Test_scale, Test_question, Test_question_option, Test_question_answer, Scale
from app import app, request, db


test_creator = Blueprint('test_creator', __name__, url_prefix='/api/test')


@test_creator.route('/create_test', methods=['POST'])
def create_test():
    req_data = request.form

    _title = req_data.get("title")
    _user_id = req_data.get("user_id")
    _company_id = req_data.get("company_id")

    test = Test.query.filter_by(title=_title, user_id=_user_id,company_id=_company_id).first()
    if test:
        return update_test(test)

    new_test = Test(title=_title, user_id=_user_id,company_id=_company_id)
    db.session.add(new_test)
    db.session.commit()

    return {
        "success": True,
        "msg": "Тест успешно создан",
        "id": new_test.id
    }, 200


@test_creator.route('/update_test', methods=['POST'])
def update_test(test=''):
    req_data = request.get_json()

    _title = req_data.get("title")
    _user_id = req_data.get("user_id")
    _company_id = req_data.get("company_id")

    if(test == ''):
        test = Test.query.filter_by(title=_title, user_id=_user_id,company_id=_company_id).first()

    return {
        "success": True,
        "msg": "Тест обновлен",
        "id": test.id
    }, 200


@test_creator.route('/create_test_question', methods=['POST'])
def create_test_question():
    req_data = request.get_json()

    _test_id = req_data.get("test_id")
    _question = req_data.get("question")
    _question_type = req_data.get("question_type")

    test_question = Test_question.query.filter_by(test_id=_test_id, question=_question).first()
    if test_question:
        return update_test_question(test_question)

    new_question = Test_question(test_id=_test_id, question=_question, question_type=_question_type)
    db.session.add(new_question)
    db.session.commit()

    return {
        "success": True,
        "msg": "Вопрос создан",
        "id": new_question.id
    }, 200

@test_creator.route('/update_test_question')
def update_test_question(test_question=''):
    req_data = request.get_json()

    _test_id = req_data.get("test_id")
    _question = req_data.get("question")
    _question_type = req_data.get("question_type")

    if(test_question == ''):
        test_question = Test_question.query.filter_by(test_id=_test_id, question=_question).first()

    test_question.question_type = _question_type

    return {
        "success": True,
        "msg": "Тест обновлен",
        "id": test_question.id,
        "type": test_question.question_type
    }, 200


@test_creator.route('/create_test_question_option', methods=['POST'])
def create_test_question_option():
    req_data = request.get_json()

    _test_question_id = req_data.get("test_question_id")
    _option = req_data.get("option")

    test_question_option = Test_question_option.query.filter_by(test_question_id=_test_question_id, option=_option).first()
    if test_question_option:
        return {
            "success": True,
            "msg": "Такой вариант уже создан",
            "id": test_question_option.id,
        }, 200


    new_question_option = Test_question_option(test_question_id=_test_question_id, option=_option)
    db.session.add(new_question_option)
    db.session.commit()


    return {
        "success": True,
        "msg": "Вариант ответа создан",
        "id": new_question_option.id,
    }, 200


@test_creator.route('/update_test_question_option', methods=['POST'])
def update_test_question_option():
    req_data = request.get_json()

    _test_question_option_id = req_data.get("test_question_option_id")
    _option = req_data.get("option")

    test_question_option = Test_question_option.query.filter_by(id=_test_question_option_id).first()
    test_question_option.option = _option

    return {
        "success": True,
        "msg": "Вариант ответа обновлен",
        "id": test_question_option.id,
        "option": test_question_option.option
    }, 200


@test_creator.route('/create_test_question_answer', methods=['POST'])
def create_test_question_answer():
    req_data = request.get_json()

    _test_question_id = req_data.get("test_question_id")
    _scale_id = req_data.get("scale_id")
    _answer = req_data.get("answer")
    _balls = req_data.get("balls")

    test_question_answer = Test_question_answer.query.filter_by(test_question_id=_test_question_id, answer=_answer).first()
    if test_question_answer:
        return {
            "success": True,
            "msg": "Такой ответ уже разбалован, его надо обновлять",
            "id": test_question_answer.id,
        }, 200


    test_question_answer = Test_question_answer(test_question_id=_test_question_id, scale_id=_scale_id, answer=_answer, balls=_balls)
    db.session.add(test_question_answer)
    db.session.commit()

    return {
        "success": True,
        "msg": "Ответ создан",
        "id": test_question_answer.id,
    }, 200


@test_creator.route('/update_test_question_answer', methods=['POST'])
def update_test_question_answer():
    req_data = request.get_json()

    _id = req_data.get("id")
    _scale_id = req_data.get("scale_id")
    _balls = req_data.get("balls")

    test_question_answer = Test_question_answer.query.filter_by(id=_id).first()
    test_question_answer.scale_id = _scale_id
    test_question_answer.balls = _balls
    db.session.commit()

    return {
        "success": True,
        "msg": "Ответ обновлен",
        "id": test_question_answer.id,
    }, 200



@test_creator.route('/create_scale', methods=['POST'])
def create_scale():
    req_data = request.get_json()

    _test_id = req_data.get("test_id")
    _name = req_data.get("name")
    _user_id = req_data.get("user_id")
    _company_id= req_data.get("company_id")

    new_scale = Scale(name=_name, test_id=_test_id, user_id=_user_id, company_id=_company_id)
    db.session.add(new_scale)
    db.session.commit()

    return {
        "success": True,
        "msg": "Шкала создана",
        "id": new_scale.id,
    }, 200