'use client'

import styles from './page.module.css';
import { useGetAllProductsQuery } from '@/redux/features/apiSlice';

export default function Home() {

const { data } = useGetAllProductsQuery();

  return (
    <main>
      <ul>
        {data?.map(el => <li key={el.id}>{el.content}</li>)}
      </ul>
    </main>
  )
}
