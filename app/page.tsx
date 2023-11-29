'use client'
import styles from './page.module.css';
import { Products, useGetAllProductsQuery } from '@/redux/features/apiSlice';

export default function Home() {
  const { data } = useGetAllProductsQuery();

  return (
    <main>
     {data?.products.map(el => <h2 key={el.id}>{el.title}</h2>)}
    </main>
  )
}
