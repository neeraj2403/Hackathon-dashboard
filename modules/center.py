
import pymongo  

from mongo import connect


client = connect()
client = client.registration
def reg_details(center):
    reg = client.find({'center': center})
    return reg



reg = reg_details('Ernakulam Thammanam UFHC')
for i in reg:
    print(i)