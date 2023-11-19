import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'
import MarqueeNews from '@/components/MarqueeNews'
import AllCourses from '@/components/AllCourses'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center w-full  ${inter.className}`}
    >
     <Navbar/>
     <Carousel/>
     <MarqueeNews/>
     <AllCourses/>
    </main>
  )
}
