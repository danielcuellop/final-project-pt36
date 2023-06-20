"""empty message

Revision ID: 822422f8c191
Revises: d887d6db9550
Create Date: 2023-06-19 23:40:28.662736

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '822422f8c191'
down_revision = 'd887d6db9550'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('muestra', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.Integer(), nullable=False))
        batch_op.create_foreign_key(None, 'user', ['user_id'], ['id'])

    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=200),
               type_=sa.String(length=80),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.String(length=80),
               type_=sa.VARCHAR(length=200),
               existing_nullable=False)

    with op.batch_alter_table('muestra', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('user_id')

    # ### end Alembic commands ###
