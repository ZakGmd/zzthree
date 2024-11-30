
import Scene from './components/models/scene'

export default function Home() {
  return (
    <div  className='bg-black flex flex-col'>
      <div className='px-4 py-3 flex items-center justify-between text-white'>
        <div className='flex items-center gap-2'>
          <div className='text-[20px] font-semibold'>Happy Seats</div>
          <img src='/sofa.svg' width={24} height={24} />
        </div>
        <div className='flex items-center gap-5'>
          <div>Product</div>
          <div>Pricing</div>
          <div>Resources</div>
        </div>
        <div className='px-3 py-2 bg-gradient-to-b from-white/10 to-white/15 rounded-lg '>Open Account</div>
      </div>
      <div className="w-full h-screen flex items-center justify-between">
        <div className='text-[24px] font-semibold leading-4 tracking-tighter text-white'>Make your own Sofa</div>
        <Scene />
    </div>
      
    </div>
  )
}