function ServiceList() {
    try {
        const services = [
            {
                id: 1,
                title: '日常清洁',
                description: '专业团队为您提供全面细致的日常清洁服务',
                icon: 'fa-broom',
                bgColor: 'bg-green-500'
            },
            {
                id: 2,
                title: '深度清洁',
                description: '针对厨房、卫生间等区域的深度清洁服务',
                icon: 'fa-spray-can',
                bgColor: 'bg-blue-500'
            },
            {
                id: 3,
                title: '家电清洁',
                description: '空调、洗衣机、冰箱等家电的专业清洁保养',
                icon: 'fa-tv',
                bgColor: 'bg-purple-500'
            },
            {
                id: 4,
                title: '家电维修',
                description: '各类家电故障检测与维修服务',
                icon: 'fa-tools',
                bgColor: 'bg-red-500'
            }
        ];

        return (
            <section data-name="service-list" id="services" className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">我们的服务</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('ServiceList component error:', error);
        reportError(error);
    }
}
