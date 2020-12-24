from flask import Flask, render_template ,jsonify
import requests
import pandas as pd
import json

app= Flask(__name__)

@app.route("/data")
def data():

    df=pd.read_csv('https://api.covid19india.org/csv/latest/case_time_series.csv')
    json_data = df.to_json() 
    return json_data


@app.route("/")
def index():
    return render_template("index.html")
if __name__=='__main__':
    app.run(debug=True)
    

