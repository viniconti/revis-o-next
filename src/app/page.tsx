import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-white font-sans'>
      <main className='flex gap-4 flex-col min-h-screen w-full max-w-3xl items-center justify-center py-32 px-16'>
        <h1 className='text-2xl font-semibold'>Vinicius Conti</h1>

        <Link href='/sobre-mim' className='bg-slate-600 p-2 rounded-md'>
          <button className="text-white cursor-pointer">Sobre mim</button>
        </Link>
      </main>
    </div>
  );
}
