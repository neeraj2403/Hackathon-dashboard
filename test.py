import requests
import pandas as pd
import json
 
df=pd.read_csv('https://api.covid19india.org/csv/latest/case_time_series.csv')
json = df.to_json() 
print(json)