"use client";
import {  useSelector } from 'react-redux'
import type { RootState } from "@/store";
import { useEffect } from 'react';
import styles from '@/styles/profile.module.css'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import 'react-loading-indicator'

export default function Home() {
  const selector = useSelector((store : RootState) =>  store.profile );
  const router = useRouter();

  const onBack = (e:any) => {
    e.preventDefault();
    router.push('/')
  }

  return (
    <main className={styles.profile}>
      <div onClick={onBack} className={styles['button-back']}>{'<'}</div>
      <div style={{ alignItems : 'center', justifyContent : 'space-around', justifyItems : 'center' }}>
       <div className={styles['profile-avatar']}>
        <Image alt='' src={selector.user['picture']['large']} height={85} width={85}/>
       </div>
       <div>
        
       <div className={styles.text}>{selector.user['name']['first'] + ' ' + selector.user['name']['last']}</div>
       <div className={styles.text}>{selector.user['gender']}</div>
       <div className={styles.text}>{selector.user['email']}</div>
       <div className={styles.text}>{selector.user['adress']}</div>
       </div>
       </div>
       <div></div>
    </main>
  );
}
