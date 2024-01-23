import Link from 'next/link'

const NonLogged = () => {
    return (
        <div className="fixed bottom-[4%] w-full">
            <div className="w-full flex flex-col gap-3 items-center justify-center p-5">
                <h2 className="w-full text-slate-300 text-2xl md:text-3xl font-sans animate-slide-down text-center">
                    This section is available for signed in users only
                </h2>
                <h3 className="w-full text-slate-400 text-2xl md:text-3xl font-sans animate-slide-down text-center">
                    Please{' '}
                    <Link href="/sign-in" className="hover:text-slate-100">
                        click here
                    </Link>{' '}
                    to sign in to Selfspace
                </h3>
            </div>
        </div>
    )
}

export default NonLogged
