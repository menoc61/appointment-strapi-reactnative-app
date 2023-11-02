import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Shared/PageHeader';
import HospitalDoctorTab from '../Components/HospitalDoctorsScreen./HospitalDoctorTab';
import HospitalListBig from '../Components/HospitalDoctorsScreen./HospitalListBig';
import GlobalApi from '../Services/GlobalApi';
import Colors from '../../assets/Shared/Colors';
import DoctorList from '../Components/HospitalDoctorsScreen./DoctorList';

export default function HospitalDoctorsListScreen() {

  const [hospitalList,setHospitalList]=useState([]);
  const [doctorsList,setDoctorsList]=useState([]);

  const param=useRoute().params;
  const [activeTab,setActiveTab]=useState('Hospital');

  useEffect(()=>{
    activeTab=='Hospital'?
    getHospitalsByCategory()
    :getDoctorsByCategory();
  },[activeTab])

  const getHospitalsByCategory=()=>{
    GlobalApi.getHospitalsByCategory(param?.categoryName).then(resp=>{
      setHospitalList(resp.data.data);
    })
  }
  const getDoctorsByCategory=()=>{
    GlobalApi.getDoctorsByCategory(param?.categoryName).then(resp=>{
      setDoctorsList(resp.data.data);
    })
  }
  return (
    <View style={{padding:20}}>
     
      <PageHeader title={param?.categoryName}/>

      <HospitalDoctorTab activeTab={(value)=>setActiveTab(value)} />
       
      {!hospitalList?.length
      ?<ActivityIndicator size={'large'} 
      color={Colors.PRIMARY}
      style={{marginTop:'50%'}} />
      : 
      activeTab=='Hospital'?
      <HospitalListBig hospitalList={hospitalList} />
      :<DoctorList doctorsList={doctorsList} />
      }
      
     

    </View>
  )
}