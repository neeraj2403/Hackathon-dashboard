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

@app.route("/health_workers")
def health_workers():
    with open('./Datasets/healthworkers_index') as h:
        health_workers = json.load(h)
    return health_workers

@app.route("/school")
def school():
    with open('./Datasets/school_index') as s:
        school = json.load(s)
    return school

if __name__=='__main__':
    app.run(debug=True)