export default function LoadingScreen() {
  return (
    <>
      <div className='mb-6 animate-pulse'>
        <div className='mb-2 h-6 w-3/4 rounded-sm bg-gray-900'></div>
        <div className='h-6 w-1/2 rounded-sm bg-gray-900'></div>
      </div>
      <div className='space-y-2'>
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className='h-12 w-full animate-pulse rounded-sm bg-gray-900'
          />
        ))}
      </div>
    </>
  );
}
