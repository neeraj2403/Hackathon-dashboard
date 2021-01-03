from flask import Flask, render_template , request
import requests
import json
import math

app= Flask(__name__)



# loading index
with open('./Datasets/active_vulnerability_index') as f:
        active_vulnerability_index_json= json.load(f)

with open('./Datasets/healthworkers_index') as h:
        health_workers_json = json.load(h)

with open('./Datasets/school_index') as s:
        school_json = json.load(s)
with open('./Datasets/50plus_index') as s:
        fiftyplus_json = json.load(s)




# load phase 1, phase2 & phase 3

# data
with open('./Datasets/New Folder/phase1_india') as s:
        phase1_india_json = json.load(s)



# phase 1 states

state_0=[]
with open('./Datasets/New Folder/state_0_ph1') as s:
        phase1_0_states = json.load(s)
        for i in phase1_0_states:
                state_0.append( phase1_0_states[i])

state_1=[]
with open('./Datasets/New Folder/state_1_ph1') as s:
        phase1_1_states = json.load(s)
        for i in phase1_1_states:
                state_1.append( phase1_1_states[i])

state_2=[]
with open('./Datasets/New Folder/state_2_ph1') as s:
        phase1_2_states = json.load(s)
        for i in phase1_2_states:
                state_2.append( phase1_2_states[i])


# phase 2






@app.route('/priority', methods=['post', 'get'])
def priority():

    # phase1 days
    phase1_0_day= phase1_india_json['no of days_health care']['0']
    phase1_1_day= phase1_india_json['no of days_health care']['1']
    phase1_2_day= phase1_india_json['no of days_health care']['2']
    
    # phase1 percentage covered
    phase1_0_perc=phase1_india_json['per_coverd']['0']
    phase1_1_perc=phase1_india_json['per_coverd']['1']
    phase1_2_perc=phase1_india_json['per_coverd']['2']


    # phase 2 day
    phase2_0_day_50_60=39
    phase2_1_day_50_60=38
    phase2_2_day_50_60=39
    

    return render_template('prediction.html',
    phase1_0_day=math.ceil(phase1_0_day),
    phase1_1_day=math.ceil(phase1_1_day),
    phase1_2_day=math.ceil(phase1_2_day),
    phase1_0_perc=phase1_0_perc,
    phase1_1_perc=phase1_1_perc,
    phase1_2_perc=phase1_2_perc,
    state_0=state_0,
    state_1=state_1,
    state_2=state_2,
    phase2_0_day_50_60=phase2_0_day_50_60,
    phase2_1_day_50_60=phase2_1_day_50_60,
    phase2_2_day_50_60=phase2_2_day_50_60
    )










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