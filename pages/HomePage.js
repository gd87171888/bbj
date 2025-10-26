function HomePage() {
    try {
        return (
            <div data-name="home-page" className="min-h-screen flex flex-col bg-gray-900">
                <TechNavbar />
                <main className="flex-grow">
                    <HeroSection />
                    <ServiceGrid />
                    <InteractiveZone />
                    <TechFeatures />
                    <BookingPanel />
                </main>
                <TechFooter />
            </div>
        );
    } catch (error) {
        console.error('HomePage component error:', error);
        reportError(error);
    }
}
