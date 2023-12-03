'use client'

import styles from './page.module.css';
import { useGetAllArticlesQuery } from '@/redux/features/apiSlice';

export default function Home() {

const { data } = useGetAllArticlesQuery();

  return (
    <main>
      <ul>
        {data?.map(el => <li key={el.id}>{el.content}</li>)}
      </ul>
    </main>
  )
}
