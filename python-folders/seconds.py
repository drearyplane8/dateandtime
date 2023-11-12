from pymongo import MongoClient
import time

CLIENNT = MongoClient("mongodb+srv://01turbidphoneme:MpGTeXh7CYOCbgLo@cluster0.lp5ui8k.mongodb.net/?retryWrites=true&w=majority")
DB = CLIENNT["hackathon"]
COLLECTION = DB["date_collection"]

while True:
    # Increase the second count by 1 every second. If it is 59 seconds, set to 0.

    seconds = COLLECTION.find_one({"_id": "seconds"})["seconds"]

    if time.time() % 60 == 0 and seconds != 0:
        seconds = 0

    COLLECTION.update_one({"_id": "seconds"}, {"$set": {"seconds": (seconds + 1) % 60}})

    time.sleep(1)