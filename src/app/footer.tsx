import Link from 'next/link'
export default function Footer() {
    return (
        <footer className='bg-black w-screen  text-white'>
            <div className='max-w-screen-xl mx-auto px-6 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-12 items-center'>
                    <div>
                        ThisBuchanan.com &#169; {new Date().getFullYear()}
                    </div>
                    <div className='md:pr-10'>
                        <Link href={"/Site"}>About This Site</Link>
                    </div>
                </div>
            </div>
            

        </footer>
    )
}