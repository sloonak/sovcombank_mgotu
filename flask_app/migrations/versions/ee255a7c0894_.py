"""empty message

Revision ID: ee255a7c0894
Revises: b489bf8764a8
Create Date: 2023-05-28 16:11:56.640067

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ee255a7c0894'
down_revision = 'b489bf8764a8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('role', schema=None) as batch_op:
        batch_op.drop_index('ix_role_name')
        batch_op.drop_index('ix_role_right_level')

    op.drop_table('role')
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_index('ix_user_email')
        batch_op.drop_index('ix_user_role_id')
        batch_op.drop_index('ix_user_username')

    op.drop_table('user')
    with op.batch_alter_table('direction', schema=None) as batch_op:
        batch_op.drop_index('ix_direction_name')

    op.drop_table('direction')
    with op.batch_alter_table('right_level_access', schema=None) as batch_op:
        batch_op.drop_index('ix_right_level_access_functional_name')
        batch_op.drop_index('ix_right_level_access_right_level')

    op.drop_table('right_level_access')
    with op.batch_alter_table('resume', schema=None) as batch_op:
        batch_op.drop_index('ix_resume_direction_id')
        batch_op.drop_index('ix_resume_email')
        batch_op.drop_index('ix_resume_name')
        batch_op.drop_index('ix_resume_user_id')

    op.drop_table('resume')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('resume',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('user_id', sa.INTEGER(), nullable=True),
    sa.Column('direction_id', sa.INTEGER(), nullable=True),
    sa.Column('name', sa.VARCHAR(length=64), nullable=True),
    sa.Column('description', sa.TEXT(), nullable=True),
    sa.Column('email', sa.VARCHAR(length=120), nullable=True),
    sa.Column('social_network', sa.TEXT(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('resume', schema=None) as batch_op:
        batch_op.create_index('ix_resume_user_id', ['user_id'], unique=False)
        batch_op.create_index('ix_resume_name', ['name'], unique=False)
        batch_op.create_index('ix_resume_email', ['email'], unique=False)
        batch_op.create_index('ix_resume_direction_id', ['direction_id'], unique=False)

    op.create_table('right_level_access',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('functional_name', sa.VARCHAR(length=64), nullable=True),
    sa.Column('right_level', sa.INTEGER(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('right_level_access', schema=None) as batch_op:
        batch_op.create_index('ix_right_level_access_right_level', ['right_level'], unique=False)
        batch_op.create_index('ix_right_level_access_functional_name', ['functional_name'], unique=False)

    op.create_table('direction',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('name', sa.VARCHAR(length=64), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('direction', schema=None) as batch_op:
        batch_op.create_index('ix_direction_name', ['name'], unique=False)

    op.create_table('user',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('role_id', sa.INTEGER(), nullable=True),
    sa.Column('username', sa.VARCHAR(length=64), nullable=True),
    sa.Column('email', sa.VARCHAR(length=120), nullable=True),
    sa.Column('password_hash', sa.VARCHAR(length=128), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.create_index('ix_user_username', ['username'], unique=False)
        batch_op.create_index('ix_user_role_id', ['role_id'], unique=False)
        batch_op.create_index('ix_user_email', ['email'], unique=False)

    op.create_table('role',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('name', sa.VARCHAR(length=64), nullable=True),
    sa.Column('right_level', sa.INTEGER(), nullable=True),
    sa.Column('description', sa.TEXT(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('role', schema=None) as batch_op:
        batch_op.create_index('ix_role_right_level', ['right_level'], unique=False)
        batch_op.create_index('ix_role_name', ['name'], unique=False)

    # ### end Alembic commands ###