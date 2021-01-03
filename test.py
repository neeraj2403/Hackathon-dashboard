import requests
import pandas as pd
import json

state_0=[]
with open('./Datasets/New Folder/phase2_state_50_60') as s:
        phase1_india_json = json.load(s)
        phase1_india_json=json.dumps(phase1_india_json,indent=4)
print(phase1_india_json)


