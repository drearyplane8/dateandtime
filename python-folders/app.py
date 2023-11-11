from flask import *
from flask_cors import CORS
import datetime
import os
import requests
import subprocess


app = Flask(__name__)
CORS(app)

@app.route("/month")
def get_current_month():
    val = os.popen("date /t").read() 
    return str(val)[3:5]

@app.route("/day")
def get_current_day():
    starsign = request.args.get('starsign')
    params = (
        ('sign', starsign),
        ('day', 'today')
    )
    val = requests.post('https://aztro.sameerkumar.website/', params=params)
    return val.text

@app.route("/hour")
def get_current_hour():
    hour = subprocess.run("../win32/a.exe").returncode
    print(hour)
    return str(hour)