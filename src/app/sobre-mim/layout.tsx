type SobreMimLayoutProps = {
  children: React.ReactNode;
};

export default function SobreMimLayout({ children }: SobreMimLayoutProps) {
  return (
    <div className='flex flex-col justify-center items-center bg-slate-300'>
      <h1 className='font-bold text-2xl'>Sobre mim</h1>
      {children}
    </div>
  );
}
