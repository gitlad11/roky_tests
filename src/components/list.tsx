import 'react';
import { useSelector } from 'react-redux' 
import type { RootState } from "@/store";
import Card from './card';
import { useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { paginate } from '@/utils/paginate';

export default function List() {
    const selector = useSelector((store : RootState) =>  store.profile );
    const [page, setPage] = useState(1)

    const setCurrentPage = (s: any) => {
        setPage(s)
    }

    return (
        <div >
            <ResponsivePagination
                current={page}
                total={selector.users.length/ 10}
                onPageChange={setCurrentPage}
                />
            {paginate(selector.users, page, 10).map((i:any, key:number) => {
                return <Card key={key} i={i}/>
            })}
        </div>
    );
  }