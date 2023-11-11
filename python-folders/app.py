from flask import *
from flask_cors import CORS
import datetime
import os


app = Flask(__name__)
CORS(app)
@app.route("/")

def get_current_month():
    val = os.popen("date /t").read() 
    return str(val)[3:5]