from flask import Flask, render_template , request
import requests
import json

app= Flask(__name__)

with open('./Datasets/active_vulnerability_index') as f:
        active_vulnerability_index= json.load(f)



with open('./Datasets/healthworkers_index') as h:
        health_workers = json.load(h)



with open('./Datasets/school_index') as s:
        school = json.load(s)

@app.route('/phase', methods=['post', 'get'])
def login():
    message = ''
    if request.method == 'POST':
        name = request.form.get('name')  # access the data inside 
        age = request.form.get('age')
        state = request.form.get('state')
        occupation = request.form.get('occupation')
        person = request.form.get('person with comorbidities ')
        comorbidities = request.form.get('comorbidities')

    
        

    return render_template('index.html')











@app.route("/")
def index():
    return render_template("ContactFrom_v3/index.html")

@app.route("/data")
def data():
    
    return active_vulnerability_index

@app.route("/health_workers")
def health_workers():
    
    return health_workers

@app.route("/school")
def school():
    
    return school

if __name__=='__main__':
    app.run(debug=True)