from flask import Flask, render_template
import requests
import json

app= Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/data")
def data():
    with open('./Datasets/active_vulnerability_index') as f:
        data = json.load(f)
    return data

if __name__=='__main__':
    app.run(debug=True)