from flask import Flask, render_template , request
import requests
import json

app= Flask(__name__)

with open('./Datasets/active_vulnerability_index') as f:
        active_vulnerability_index_json= json.load(f)



with open('./Datasets/healthworkers_index') as h:
        health_workers_json = json.load(h)



with open('./Datasets/school_index') as s:
        school_json = json.load(s)

with open('./Datasets/50plus_index') as s:
        fiftyplus_json = json.load(s)



@app.route('/form', methods=['post', 'get'])
def login():
    message = ''
    if request.method == 'POST':
        name = request.form.get('name')  # access the data inside 
        age = request.form.get('age')
        state = request.form.get('state')
        occupation = request.form.get('occupation')
        person = request.form.get('person with comorbidities ')
        comorbidities = request.form.get('comorbidities')
        print(occupation, flush=True)

        if occupation== 'Healthworker':
            message='phase 1'

    
        

    return render_template('form.html' ,message=message )











@app.route("/")
def index():
    return render_template("index.html")

@app.route("/data")
def data():
    
    return active_vulnerability_index_json

@app.route("/health_workers")
def health_workers():
    
    return health_workers_json

@app.route("/school")
def school():

    return school_json

@app.route("/50plus")
def fiftyplus():

    return fiftyplus_json

if __name__=='__main__':
    app.run(debug=True)