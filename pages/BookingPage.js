function BookingPage() {
    try {
        return (
            <div data-name="booking-page" className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                            <h1 className="text-3xl font-bold mb-8 text-center">预约服务</h1>
                            <BookingForm />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('BookingPage component error:', error);
        reportError(error);
    }
}
