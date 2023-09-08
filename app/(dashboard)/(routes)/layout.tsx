import Footer from '@/components/custom/Footer'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            {children}
            <Footer />
        </div>
    )
}

export default DashboardLayout
