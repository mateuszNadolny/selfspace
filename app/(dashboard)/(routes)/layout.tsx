import Footer from '@/components/custom/Footer'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-h-screen">
            {children}
            <Footer />
        </div>
    )
}

export default DashboardLayout
