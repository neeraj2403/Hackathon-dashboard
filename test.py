import requests
import pandas as pd
import json
 
with open('./Datasets/acitve_vulnerability_index') as f:
        data = json.load(f)
print(type(data))