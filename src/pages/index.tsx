import { Inter } from 'next/font/google'
import CarouselTransition from '@/components/home/Carousel'
import MarqueeNews from '@/components/home/MarqueeNews'
import AllCourses from '@/components/home/AllCourses'
import HomeLayout from '@/components/HomeLayout'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center w-full  ${inter.className}`}
    >
      <HomeLayout>
        <CarouselTransition />
        <MarqueeNews />
        <AllCourses />
      </HomeLayout>
    </main>
  )
}
