import { UserButton } from '@clerk/nextjs'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-h-screen h-screen w-full relative">
            <div className="absolute z-10 top-[10px] right-[10px]">
                <UserButton />
            </div>
            {children}
        </div>
    )
}

export default DashboardLayout
