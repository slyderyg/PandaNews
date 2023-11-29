'use client'
import styles from './page.module.css';
import { useGetAllProductsQuery } from '@/redux/features/apiSlice';

export default function Home() {
  const { data } = useGetAllProductsQuery();

  console.log(data)
 
  return (
    <main>
    </main>
  )
}
