"use client";
import styles from "../styles/page.module.css";
import { useEffect, useState } from "react";
import Interceptor from "@/services/interceptor";
import { useDispatch, useSelector } from 'react-redux' 
import { setUsers } from "@/store/profile/profileSlice";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import List from "@/components/list";
import ReactLoading from 'react-loading';


export default function Home() {
  var ins = new Interceptor();
  const [fetching, setFetching] = useState(true);

  const dispatch = useDispatch()
  
  useEffect(() => {
    getData()
  },)
   
  const getData = async () => {
    var data: any = await ins.getData('?results=100')
    if(data != undefined){
      dispatch(setUsers(data.data.results))
    }
    setFetching(false)
  }

  return (
    <main className={styles.main}>
      {fetching ? <ReactLoading height={'20%'} width={'20%'} /> : <List/>}
    </main>
  );
}
