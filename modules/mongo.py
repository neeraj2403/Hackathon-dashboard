
import pymongo  



def connect():
    client = pymongo.MongoClient('mongodb+srv://vaishnav:vaishnav@cluster0.ihtgz.mongodb.net/ey?retryWrites=true&w=majority')  
    client = client.ey
    return client


