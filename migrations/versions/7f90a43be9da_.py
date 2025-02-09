"""empty message

Revision ID: 7f90a43be9da
Revises: ca03d28e6403
Create Date: 2023-06-25 19:53:51.203065

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7f90a43be9da'
down_revision = 'ca03d28e6403'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('proyecto', schema=None) as batch_op:
        batch_op.add_column(sa.Column('direction', sa.String(length=120), nullable=False))
        batch_op.drop_column('direc')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('proyecto', schema=None) as batch_op:
        batch_op.add_column(sa.Column('direc', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
        batch_op.drop_column('direction')

    # ### end Alembic commands ###
