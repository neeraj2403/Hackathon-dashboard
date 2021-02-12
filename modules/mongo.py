
import pymongo  
import URI


def connect():
    client = pymongo.MongoClient(URI.api_secret)  
    client = client.ey
    return client


