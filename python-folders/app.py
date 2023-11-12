import os
import subprocess
import multiprocessing as mp
from concurrent.futures import ThreadPoolExecutor
from flask import Flask, request
from pymongo import MongoClient
from PIL import Image, ImageDraw
import pytesseract
from io import BytesIO
import os
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

CLIENNT = MongoClient("mongodb+srv://01turbidphoneme:MpGTeXh7CYOCbgLo@cluster0.lp5ui8k.mongodb.net/?retryWrites=true&w=majority")
DB = CLIENNT["hackathon"]
COLLECTION = DB["date_collection"]

@app.route("/")
def year():
    return "2023" # Surely no one will use this after 2023

@app.route("/get/date/sec/onds")
def get_date_seconds():
    seconds = COLLECTION.find_one({"_id": "seconds"})["seconds"]

    # Make seconds into a pillow image by drawing its value
    seconds_image = Image.new("RGB", (20, 20), (255, 255, 255))
    draw = ImageDraw.Draw(seconds_image, "RGB")
    # filepath = os.path.join(os.path.dirname(__file__), "font.oft")
    # print(filepath)
    # font = ImageFont.truetype(str(filepath), 30)
    draw.text((2, 2), str(seconds), fill=0) # , font=font)

    # Save image to bytes
    bytes_io = BytesIO()
    seconds_image.save(bytes_io, format="PNG")
    bytes_io.seek(0)

    # Return image bytes
    return bytes_io.read()

@app.route("/convert/from/image/to/text", methods=["POST"])
def convert_image_to_text():
    print("*******STARTING CONVERT TO TEXT********")
    print("content type is " + request.content_type)
    print(request.form["image"])
    

    bytesio = BytesIO(bytes)
    print(bytesio.read())

    image = Image.open(bytesio)
    text = pytesseract.image_to_string(image, output_type=pytesseract.Output.DICT)
    print(text)
    return text

@app.route("/tailor/swift/concert/countdown")
def hours():
    tailor_concert = datetime(2024, 6, 21, 21, 0, 0)
    until = tailor_concert - datetime.now()
    
    hours = until.seconds // 3600
    minutes = (until.seconds % 3600) // 60
    seconds = until.seconds % 60
    return "There are {} days, {} hours, {} minutes, and {} seconds until the next Taylor Swift concert.".format(until.days, hours, minutes, seconds)

@app.route("/m")
def get_current_month():
    val = os.popen("date /t").read() 
    return str(val)[3:5]

@app.route("/get/current/hour")
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