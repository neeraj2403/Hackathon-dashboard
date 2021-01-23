from flask import Flask, render_template , request,jsonify

import json
import math


from pymongo import MongoClient
import json 






with open('./Datasets/vaccination') as file:
  data_center_vaccination = json.load(file)


for i in data_center_vaccination:
   i['dis']=0


def calcDist(lat,long):
        
        for i in data_center_vaccination:
                dist=math.sqrt(abs((long-i['Longitude'])**2-(lat-i['Latitude'])**2))
                i['dis']=dist
        
        a=[]
        for i in data_center_vaccination:
                a.append(i['dis'])
        a.sort() 
        for i in data_center_vaccination:
                if(a[0]==i['dis']):
                        return i['Vaccination']




center = calcDist(10.053217879640254, 76.31975408889113)
print(center)



       



        

  



  
# import modules
from modules.mongo import connect

app= Flask(__name__)


client=connect()
client=client.registration




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
with open('./Datasets/New Folder/phase2_state_50_60') as s:
        phase2_50_60_state_json = json.load(s)
with open('./Datasets/New Folder/phase2_state_60_70') as s:
        phase2_60_70_state_json = json.load(s)
with open('./Datasets/New Folder/phase2_state_70_80') as s:
        phase2_70_80_state_json = json.load(s)
with open('./Datasets/New Folder/phase2_state_80') as s:
        phase2_80_state_json = json.load(s)


# phase 3
with open('./Datasets/New Folder/phase3_state_15_19') as s:
        phase3_state_json = json.load(s)


# phase 1 state
with open('./Datasets/New Folder/phase1_state') as s:
        phase1_state = json.load(s)

# phase 2 state
with open('./Datasets/New Folder/phase2_state_50_60') as s:
        phase2_state_50_60 = json.load(s)

with open('./Datasets/New Folder/phase2_state_60_70') as s:
        phase2_state_60_70 = json.load(s)

with open('./Datasets/New Folder/phase2_state_70_80') as s:
        phase2_state_70_80 = json.load(s)

with open('./Datasets/New Folder/phase2_state_80') as s:
        phase2_state_80 = json.load(s)


with open('./Datasets/New Folder/phase3_state_15_19') as s:
        phase3 = json.load(s)



@app.route('/priority',  methods=('GET', 'POST'))
def priority():

        
    # phase1 days
    phase1_0_day= phase1_india_json['no of days_health care']['0']
    phase1_1_day= phase1_india_json['no of days_health care']['1']
    phase1_2_day= phase1_india_json['no of days_health care']['2']
    print(phase1_0_day,flush=True)
    


    # phase1 percentage covered
    phase1_0_perc=phase1_india_json['per_coverd']['0']
    phase1_1_perc=phase1_india_json['per_coverd']['1']
    phase1_2_perc=phase1_india_json['per_coverd']['2']


    # phase 2 day
    phase2_0_day_50_60=39
    phase2_1_day_50_60=38
    phase2_2_day_50_60=39

    phase2_0_day_60_70=28
    phase2_1_day_60_70=23
    phase2_2_day_60_70=32

    phase2_0_day_70_80=11
    phase2_1_day_70_80=12
    phase2_2_day_70_80=9

    phase2_0_day_80=5
    phase2_1_day_80=4
    phase2_2_day_80=4


    #phase3 day
    phase3_0_day=57
    phase3_1_day=48
    phase3_2_day=55
    
    state_selected='India'
    state_selected_ph1 = ''
    state_selected_ph2_50_60 = ''
    state_selected_ph2_60_70 = ''
    state_selected_ph2_70_80 = ''
    state_selected_ph2_80 = ''
    state_selected_ph3 = ''
    
    
    
    
    
    
    if request.method == 'POST':
           state_selected = request.form['state']
           
           for i in phase1_state:
            if i['State']==state_selected:
                    state_selected_ph1 = i
           
           
           
           for i in phase2_state_50_60:
                if i['State']==state_selected:
                    state_selected_ph2_50_60 = i         
           

           for i in phase2_state_60_70:
                if i['State']==state_selected:
                    state_selected_ph2_60_70 = i
           

           for i in phase2_state_70_80:
                if i['State']==state_selected:
                    state_selected_ph2_70_80 = i

           for i in phase2_state_80:
                if i['State']==state_selected:
                    state_selected_ph2_80 = i
           

           for i in phase3:
                if i['State']==state_selected:
                    state_selected_ph3 = i

          










    return render_template('prediction.html',
    state=state_selected,
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
    phase2_2_day_50_60=phase2_2_day_50_60,
    phase2_0_day_60_70=phase2_0_day_60_70,
    phase2_1_day_60_70=phase2_1_day_60_70,
    phase2_2_day_60_70=phase2_2_day_60_70,
    phase2_0_day_70_80=phase2_0_day_70_80,
    phase2_1_day_70_80=phase2_1_day_70_80,
    phase2_2_day_70_80=phase2_2_day_70_80,
    phase2_0_day_80=phase2_0_day_80,
    phase2_1_day_80=phase2_1_day_80,
    phase2_2_day_80=phase2_2_day_80,
    phase2_50_60_state_json =phase2_50_60_state_json,
    phase2_60_70_state_json =phase2_60_70_state_json,
    phase2_70_80_state_json =phase2_70_80_state_json,
    phase2_80_state_json    =phase2_80_state_json,
    phase3_0_day=phase3_0_day,
    phase3_1_day=phase3_1_day,
    phase3_2_day=phase3_2_day,
    states=active_vulnerability_index_json['index'],
    state_phase1_data=state_selected_ph1,
    state_selected_ph2_50_60=state_selected_ph2_50_60,
    state_selected_ph2_60_70=state_selected_ph2_60_70,
    state_selected_ph2_70_80=state_selected_ph2_70_80,
    state_selected_ph2_80=state_selected_ph2_80,
    state_selected_ph3=state_selected_ph3
    )





@app.route('/form', methods=('GET', 'POST'))

def forms():
        # day = 0
        # print(day,flush=True)
        # if request.method == 'POST':
        #         username = request.form['name']
        #         state_sel = request.form['State']
        #         age= request.form.get('Age',type=int)
                
             

        #         occ= request.form['occupation']
        #         print(username,state_sel,age,flush=True)
                
        #         if occ =='Frontline Workers/Hospital Workers':
        #                 for i in phase1_state:
        #                         if i['State']==state_sel:
        #                                 if i['index']==0:
        #                                         day=0
        #                                 if i['index']==1:
        #                                         day=11
        #                                 if i['index']==2:
        #                                         day=17
        #                 print(day,flush=True)
                                

            
        #         if occ =='Other Jobs':
        #                 if age > 80:
        #                         for i in phase2_state_80:
        #                                 if i['State']==state_sel:
        #                                         if i['index']==0:
        #                                                 day=24
        #                                         if i['index']==1:
        #                                                 day=29
        #                                         if i['index']==2:
        #                                                 day=33
        #                         print(day,flush=True)
                                
        #                 if age in range(70,80):
        #                         for i in phase2_state_70_80:
        #                                 if i['State']==state_sel:
        #                                         if i['index']==0:
        #                                                 day=37
        #                                         if i['index']==1:
        #                                                 day=48
        #                                         if i['index']==2:
        #                                                 day=60
        #                         print(day,flush=True)
                                
        #                 if age in range(60,70):
        #                         for i in phase2_state_60_70:
        #                                 if i['State']==state_sel:
        #                                         if i['index']==0:
        #                                                 day=69
        #                                         if i['index']==1:
        #                                                 day=97
        #                                         if i['index']==2:
        #                                                 day=120
        #                 if age in range(50,60):
        #                         for i in phase2_state_50_60:
        #                                 if i['State']==state_sel:
        #                                         if i['index']==0:
        #                                                 day=152
        #                                         if i['index']==1:
        #                                                 day=191
        #                                         if i['index']==2:
        #                                                 day=229
        #                 if age in range(15,20):
        #                         for i in phase3_state_15_19:
        #                                 if i['State']==state_sel:
        #                                         if i['index']==0:
        #                                                 day=152
        #                                         if i['index']==1:
        #                                                 day=191
        #                                         if i['index']==2:
        #                                                 day=229
        #                 if age in range(20,50):
        #                         for i in phase2_state_50_60:
        #                                 if i['State']==state_sel:
        #                                         if i['index']==0:
        #                                                 day=268
        #                                         if i['index']==1:
        #                                                 day=325
        #                                         if i['index']==2:
        #                                                 day=373
                                                                                                                         
        
        return render_template('form.html',states=active_vulnerability_index_json['index'])
@app.route('/display', methods=('GET', 'POST'))
def display():        
        day = 0
        print(day,flush=True)
        if request.method == 'POST':
                username = request.form['name']
                state_sel = request.form['State']
                age= request.form.get('Age',type=int)
                lat=request.form.get('lat',type=float)
                lon = request.form.get('lon',type=float)
                print(lat,flush=True)




                
             

                occ= request.form['occupation']
                print(username,state_sel,age,flush=True)
                
                if occ in ['Hospital Workers' ,'Indian Army / Navy / Airforce ' ,'Police / Fire Force / Home Gaurd' , 'Asha Workers'] :
                        for i in phase1_state:
                                if i['State']==state_sel:
                                        if i['index']==0:
                                                day=0
                                        if i['index']==1:
                                                day=11
                                        if i['index']==2:
                                                day=17
                        print(day,flush=True)
                                

            
                if occ =='Other Jobs' or occ =='Students':
                        if age > 80:
                                for i in phase2_state_80:
                                        if i['State']==state_sel:
                                                if i['index']==0:
                                                        day=24
                                                if i['index']==1:
                                                        day=29
                                                if i['index']==2:
                                                        day=33
                                print(day,flush=True)
                                
                        if age in range(70,80):
                                for i in phase2_state_70_80:
                                        if i['State']==state_sel:
                                                if i['index']==0:
                                                        day=37
                                                if i['index']==1:
                                                        day=48
                                                if i['index']==2:
                                                        day=60
                                print(day,flush=True)
                                
                        if age in range(60,70):
                                for i in phase2_state_60_70:
                                        if i['State']==state_sel:
                                                if i['index']==0:
                                                        day=69
                                                if i['index']==1:
                                                        day=97
                                                if i['index']==2:
                                                        day=120
                        if age in range(50,60):
                                for i in phase2_state_50_60:
                                        if i['State']==state_sel:
                                                if i['index']==0:
                                                        day=152
                                                if i['index']==1:
                                                        day=191
                                                if i['index']==2:
                                                        day=229
                        if age in range(15,20):
                                for i in phase3:
                                        if i['State']==state_sel:
                                                if i['index']==0:
                                                        day=152
                                                if i['index']==1:
                                                        day=191
                                                if i['index']==2:
                                                        day=229
                        if age in range(20,50):
                                for i in phase2_state_50_60:
                                        if i['State']==state_sel:
                                                if i['index']==0:
                                                        day=268
                                                if i['index']==1:
                                                        day=325
                                                if i['index']==2:
                                                        day=373
        print(day,flush=True)
        def ord(day):
                return str(day)+("th" if 4<=day%100<=20 else {1:"st",2:"nd",3:"rd"}.get(day%10, "th"))
        day1 = ord(day)    
        center = ''  
        center=calcDist(lat,lon)   


        user = {
                'name': username,
                'state':state_sel,
                'age': age,
                'occupation':occ,
                'day': day1,
                'center': center

        }
        client.insert_one(user)




        return render_template('display.html',day1 = day1,username = username,state_sel = state_sel,age = age , center = center)


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



# vaccination center
@app.route('/centerlist')
def center_list():
        return jsonify(data_center_vaccination)


@app.route('/center')
def center_route():
       return  render_template('district.html')


if __name__=='__main__':
    app.run(debug=True)