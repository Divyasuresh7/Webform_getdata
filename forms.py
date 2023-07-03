from flask_wtf import FlaskForm
from wtforms import StringField,PasswordField,SubmitField

class SignInForm(FlaskForm):
    username = StringField('USERNAME')
    password = PasswordField('PASSWORD')
    submit = SubmitField('SUBMIT')


