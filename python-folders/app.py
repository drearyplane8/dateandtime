from flask import Flask
import datetime
import os

app = Flask(__name__)
@app.route("/")
def get_current_month():
    month = datetime.datetime.now().month
    return str(month)