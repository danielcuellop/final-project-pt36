"""empty message

Revision ID: 4129040315a7
Revises: 7f90a43be9da
Create Date: 2023-06-25 22:29:41.568868

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4129040315a7'
down_revision = '7f90a43be9da'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('proyecto', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.Integer(), nullable=False))
        batch_op.create_foreign_key(None, 'user', ['user_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('proyecto', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('user_id')

    # ### end Alembic commands ###
