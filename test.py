import requests
import pandas as pd
import json
 
with open('./Datasets/active_vulnerability_index') as f:
        data = json.load(f)

print(data['index']['Maharashtra'])