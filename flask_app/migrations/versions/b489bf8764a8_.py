"""empty message

Revision ID: b489bf8764a8
Revises: a1a6588a2fef
Create Date: 2023-05-26 22:45:27.329968

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b489bf8764a8'
down_revision = 'a1a6588a2fef'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('test_question_answer', schema=None) as batch_op:
        batch_op.add_column(sa.Column('test_question_id', sa.Integer(), nullable=True))
        batch_op.drop_index('ix_test_question_answer_test_questuion_id')
        batch_op.create_index(batch_op.f('ix_test_question_answer_test_question_id'), ['test_question_id'], unique=False)
        batch_op.drop_column('test_questuion_id')

    with op.batch_alter_table('test_question_option', schema=None) as batch_op:
        batch_op.add_column(sa.Column('test_question_id', sa.Integer(), nullable=True))
        batch_op.drop_index('ix_test_question_option_test_questuion_id')
        batch_op.create_index(batch_op.f('ix_test_question_option_test_question_id'), ['test_question_id'], unique=False)
        batch_op.drop_column('test_questuion_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('test_question_option', schema=None) as batch_op:
        batch_op.add_column(sa.Column('test_questuion_id', sa.INTEGER(), nullable=True))
        batch_op.drop_index(batch_op.f('ix_test_question_option_test_question_id'))
        batch_op.create_index('ix_test_question_option_test_questuion_id', ['test_questuion_id'], unique=False)
        batch_op.drop_column('test_question_id')

    with op.batch_alter_table('test_question_answer', schema=None) as batch_op:
        batch_op.add_column(sa.Column('test_questuion_id', sa.INTEGER(), nullable=True))
        batch_op.drop_index(batch_op.f('ix_test_question_answer_test_question_id'))
        batch_op.create_index('ix_test_question_answer_test_questuion_id', ['test_questuion_id'], unique=False)
        batch_op.drop_column('test_question_id')

    # ### end Alembic commands ###
