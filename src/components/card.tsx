type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <div className='flex flex-col gap-3 bg-gray-100 p-4 rounded-lg shadow'>
      <p className='font-semibold text-gray-500 lg:text-xl'>{title}</p>
      <span className='font-light text-sm lg:text-base text-gray-400'>
        {description}
      </span>
    </div>
  );
}
