import Logo from '../assets/logo-text.png'

export default function Nav() {
  return (
    <div className='border border-[#eee] py-5 sticky top-0 z-50 bg-white'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <nav>
                <ul className='flex justify-center items-center gap-8 text-[#475569] font-semibold text-[14px]'>
                    <li className=''><a className='text-[#DB2777]' href="">Home</a></li>
                    <li><a className='transition-colors duration-500 hover:text-[#DB2777]' href="">Technologies</a></li>
                    <li><a className='transition-colors duration-500 hover:text-[#DB2777]' href="">Projects</a></li>
                    <li><a className='transition-colors duration-500 hover:text-[#DB2777]' href="">About</a></li>
                    <li><a className='transition-colors duration-500 hover:text-[#DB2777]' href="">Contact</a></li>
                </ul>
            </nav>
            <div>
                <button className='px-5 py-1.5 cursor-pointer font-semibold text-[14px]'>Login</button>
                <button style={{background: 'var(--brand-gradent)'}} className='px-5 py-1.5 rounded-full text-white cursor-pointer font-semibold text-[14px]'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}
