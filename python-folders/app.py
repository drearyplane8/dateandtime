from flask import *
from flask_cors import CORS
import time
import os
import requests
import subprocess
import multiprocessing as mp
from concurrent.futures import ThreadPoolExecutor


app = Flask(__name__)
CORS(app)

@app.route("/month")
def get_current_month():
    val = os.popen("date /t").read() 
    return str(val)[3:5]

@app.route("/hour")
def get_current_hour():
    hour = subprocess.run("../win32/a.exe").returncode
    print(hour)
    return str(hour)

@app.route("/day")
def get_current_day():

    executor = ThreadPoolExecutor(max_workers = 2)
    val = executor.submit(start_client)
    executor.submit(start_server)
    print(val.result)
    return str(val.result())

def start_client():
    return subprocess.run("java Client localhost 54321", encoding="utf-8", cwd="../sockets", capture_output=True).stdout

def start_server():
    subprocess.run("java Server 54321", cwd="../sockets")  