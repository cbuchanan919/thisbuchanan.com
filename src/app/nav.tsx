

export default function NavBar() {

    return (
        <nav className="sticky top-0 z-50 bg-gray-800 overflow-hidden flex content-between">
            <div className='flex gap-5 m-auto w-3/4 max-w-screen-xl bg-purple-500 '> 
                {/* container to hold text / logo */}
                <a className='flex items-center' href='/'>
                    <img src='/logo.svg' alt='site logo' className='max-h-8 m-2'/>
                    <h3 className='inline-block '>ThisBuchanan.com</h3>
                </a>
                <ul className="flex gap-10 m-auto ">
                    <a href="/about"><li>About</li></a>
                    <a href="/resume"><li>Resume</li></a>
                    <a href="/contact"><li>Contact</li></a>
                </ul>
            </div>
            

        </nav>
    )
}