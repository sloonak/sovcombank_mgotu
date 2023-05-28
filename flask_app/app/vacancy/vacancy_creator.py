# from flask import Blueprint
# from app import app, request, db


# vacancy_creator = Blueprint('vacancy_creator', __name__, url_prefix='/api/vacancy')


# @test_creator.route('/create_test', methods=['POST'])
# def create_test():
#     req_data = request.get_json()

#     _title = req_data.get("title")
#     _user_id = req_data.get("user_id")
#     _company_id = req_data.get("company_id")

#     test_exists = Test.query.filter_by(title=_title, user_id=_user_id,company_id=_company_id).first()
#     if test_exists:
#         return update_test()

#     new_test = Test(title=_title, user_id=_user_id,company_id=_company_id)
#     db.session.add(new_test)
#     db.session.commit()

#     return {
#         "success": True,
#         "msg": "Тест успешно создан",
#         "id": new_test.id
#     }, 200