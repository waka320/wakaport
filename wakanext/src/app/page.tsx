import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/styles/top.module.scss';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">ポートフォリオへようこそ</h1>
        
      </main>
      <Footer />
    </div>
  )
}
