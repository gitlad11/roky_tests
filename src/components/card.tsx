'use client'
import styles from "../styles/card.module.css";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux' 
import { setUser } from "@/store/profile/profileSlice";

export default function Card(props: any) {
    const router = useRouter();
    const dispatch = useDispatch()

    const onOpen = (e:any) => {
        e.preventDefault();
        dispatch(setUser(props.i))
        router.push('/profile')
    }

    return (
        <div className={styles.card} onClick={onOpen}>
            <div>
                <Image alt="" src={props.i['picture']['thumbnail']} width={64} height={64} />
            </div>
            <div style={{ marginLeft : '12px' }}>
                <p>
                    {props.i['name']['first'] + ' ' + props.i['name']['last']}
                </p>
                <p>
                    {props.i['cell']}
                </p>
                <p>
                    {props.i['email']}
                </p>
            </div>
        </div>
    );
  }