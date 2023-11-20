import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import CarouselTransition  from '@/components/Carousel'
import MarqueeNews from '@/components/MarqueeNews'
import AllCourses from '@/components/AllCourses'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center w-full  ${inter.className}`}
    >
     <Navbar/>
     <CarouselTransition/>
     <MarqueeNews/>
     <AllCourses/>
     <Footer/>
    </main>
  )
}
