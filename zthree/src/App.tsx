
import Scene from './components/models/scene'



export default function Home() {
  return (
    <div  className='relative bg-gradient-to-bl from-[#411e2ee3] font-funnel-sans from-[-120%] to-[#361224]  flex flex-col'>
      <div className='px-4 py-3 flex items-center justify-between text-white'>
        <div className='flex items-center gap-2'>
          <div className='text-[20px] font-semibold font-funnel-sans'>Happy Seats</div>
          <img src='/sofa.svg' width={24} height={24} />
        </div>
        <div className='flex items-center gap-5 font-funnel-sans'>
          <div>Product</div>
          <div>Pricing</div>
          <div>Resources</div>
        </div>
        <div className='px-3 py-2 bg-gradient-to-b from-white/10 to-white/15 rounded-full cursor-pointer '>Open Account</div>
      </div>
      <div className="w-full h-screen flex  justify-between">
        <div className='flex flex-col items-center gap-10 mt-[280px] pl-[230px]'>
          <div className='text-[52px]  text-center text-[#F5F5DC] font-funnel-sans'>Your sofa, your rules. <br /> Design your dream seat</div>
         
        </div>
        <div className='w-[480px] h-[300px] scale-x-[0.9] px-5 py-5 absolute flex flex-col items-start gap-4 right-[260px] top-[150px] rounded-t-3xl bg-gradient-to-b from-white/10  to-transparent to-[60%]'>
            <div className='px-5 py-1 bg-gradient-to-b from-white/10 to-white/15  rounded-full text-[#f7f7e6b7] font-extralight  text-[14px] leading-3 shadow'>Happy Seats</div>
            <div className='flex items-center justify-between w-full'>
              <div className='text-[16px] text-[#f7f7e6b7] font-light'>Your sofa, your style <br />Let's design a cozy escape.</div>
              <img src="./so3.png" alt="" width={230} height={230} />
            </div>
            
        </div>
        <Scene />
    </div>
      
    </div>
  )
}