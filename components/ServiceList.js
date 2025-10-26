const SERVICE_LIST_ITEMS = ServiceCatalog.getServicesByCategory('traditional');

function ServiceList() {
    try {
        return (
            <section data-name="service-list" id="services" className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">我们的服务</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SERVICE_LIST_ITEMS.map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('ServiceList component error:', error);
        if (typeof reportError === 'function') {
            reportError(error);
        }
    }
}
