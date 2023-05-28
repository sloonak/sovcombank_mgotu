"""empty message

Revision ID: 8d3862646368
Revises: 7661930e8d66
Create Date: 2023-05-25 23:18:45.795013

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8d3862646368'
down_revision = '7661930e8d66'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('scale',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('company_id', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=64), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('scale', schema=None) as batch_op:
        batch_op.create_index(batch_op.f('ix_scale_company_id'), ['company_id'], unique=False)
        batch_op.create_index(batch_op.f('ix_scale_name'), ['name'], unique=False)
        batch_op.create_index(batch_op.f('ix_scale_user_id'), ['user_id'], unique=False)

    op.create_table('test',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('company_id', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=64), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('test', schema=None) as batch_op:
        batch_op.create_index(batch_op.f('ix_test_company_id'), ['company_id'], unique=False)
        batch_op.create_index(batch_op.f('ix_test_name'), ['name'], unique=False)
        batch_op.create_index(batch_op.f('ix_test_user_id'), ['user_id'], unique=False)

    op.create_table('test_question',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('test_id', sa.Integer(), nullable=True),
    sa.Column('question', sa.Text(), nullable=True),
    sa.Column('question_type', sa.String(length=64), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('test_question', schema=None) as batch_op:
        batch_op.create_index(batch_op.f('ix_test_question_question_type'), ['question_type'], unique=False)
        batch_op.create_index(batch_op.f('ix_test_question_test_id'), ['test_id'], unique=False)

    op.create_table('test_question_answer',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('test_questuion_id', sa.Integer(), nullable=True),
    sa.Column('scale_id', sa.Integer(), nullable=True),
    sa.Column('answer', sa.String(length=64), nullable=True),
    sa.Column('balls', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('test_question_answer', schema=None) as batch_op:
        batch_op.create_index(batch_op.f('ix_test_question_answer_balls'), ['balls'], unique=False)
        batch_op.create_index(batch_op.f('ix_test_question_answer_scale_id'), ['scale_id'], unique=False)
        batch_op.create_index(batch_op.f('ix_test_question_answer_test_questuion_id'), ['test_questuion_id'], unique=False)

    op.create_table('test_question_option',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('test_questuion_id', sa.Integer(), nullable=True),
    sa.Column('option', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('test_question_option', schema=None) as batch_op:
        batch_op.create_index(batch_op.f('ix_test_question_option_test_questuion_id'), ['test_questuion_id'], unique=False)

    op.create_table('test_scale',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('test_id', sa.Integer(), nullable=True),
    sa.Column('scale_id', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('test_scale', schema=None) as batch_op:
        batch_op.create_index(batch_op.f('ix_test_scale_scale_id'), ['scale_id'], unique=False)
        batch_op.create_index(batch_op.f('ix_test_scale_test_id'), ['test_id'], unique=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('test_scale', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_test_scale_test_id'))
        batch_op.drop_index(batch_op.f('ix_test_scale_scale_id'))

    op.drop_table('test_scale')
    with op.batch_alter_table('test_question_option', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_test_question_option_test_questuion_id'))

    op.drop_table('test_question_option')
    with op.batch_alter_table('test_question_answer', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_test_question_answer_test_questuion_id'))
        batch_op.drop_index(batch_op.f('ix_test_question_answer_scale_id'))
        batch_op.drop_index(batch_op.f('ix_test_question_answer_balls'))

    op.drop_table('test_question_answer')
    with op.batch_alter_table('test_question', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_test_question_test_id'))
        batch_op.drop_index(batch_op.f('ix_test_question_question_type'))

    op.drop_table('test_question')
    with op.batch_alter_table('test', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_test_user_id'))
        batch_op.drop_index(batch_op.f('ix_test_name'))
        batch_op.drop_index(batch_op.f('ix_test_company_id'))

    op.drop_table('test')
    with op.batch_alter_table('scale', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_scale_user_id'))
        batch_op.drop_index(batch_op.f('ix_scale_name'))
        batch_op.drop_index(batch_op.f('ix_scale_company_id'))

    op.drop_table('scale')
    # ### end Alembic commands ###
