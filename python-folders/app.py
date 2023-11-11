from flask import *
from flask_cors import CORS
import datetime


app = Flask(__name__)
CORS(app)
@app.route("/")
def get_current_month():
    month = datetime.datetime.now().month
    return str(month)