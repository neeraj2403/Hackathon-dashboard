import requests
import pandas as pd
import json

state_0=[]
with open('./Datasets/New Folder/phase3_state_15_19') as s:
        test = json.load(s)
        test=json.dumps(test,indent=4)
# for i in test:
#         print(i)
        

        print(test)


