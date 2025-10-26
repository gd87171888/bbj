function ServiceDetailPage({ serviceId }) {
    try {
        const defaultServiceId = ServiceCatalog.getDefaultServiceId('traditional');
        const serviceDetail = ServiceCatalog.getServiceDetail(serviceId) || ServiceCatalog.getServiceDetail(defaultServiceId);

        if (!serviceDetail) {
            return (
                <div data-name="service-detail-page" className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-grow flex items-center justify-center text-gray-500 text-sm">
                        未找到对应的服务，请返回首页重新选择。
                    </main>
                    <Footer />
                </div>
            );
        }

        const categoryLabel = serviceDetail.category === 'tech' ? '科技服务' : '传统服务';
        const relatedServices = ServiceCatalog
            .getServicesByCategory(serviceDetail.category || 'traditional')
            .filter(service => service.id !== serviceDetail.id);
        const serviceItems = Array.isArray(serviceDetail.includes) ? serviceDetail.includes : [];

        return (
            <div data-name="service-detail-page" className="min-h-screen flex flex-col bg-gray-50">
                <Header />
                <main className="flex-grow py-10">
                    <div className="container mx-auto px-4">
                        <nav className="text-sm text-gray-500 mb-6">
                            <a href="#" className="hover:text-cyan-500">首页</a>
                            <span className="mx-2">/</span>
                            <span>{serviceDetail.title}</span>
                        </nav>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
                            <div className="space-y-5">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 text-cyan-600 text-xs font-medium">
                                    {categoryLabel}
                                </span>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    {serviceDetail.title}
                                </h1>
                                <p className="text-gray-600 leading-relaxed">
                                    {serviceDetail.description}
                                </p>
                                <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-700">
                                    <span className="flex items-center gap-2">
                                        <i className="fas fa-yen-sign text-cyan-500"></i>
                                        价格: {serviceDetail.price}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <i className="fas fa-clock text-cyan-500"></i>
                                        时长: {serviceDetail.duration}
                                    </span>
                                </div>
                                <a
                                    href="#booking"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:from-cyan-600 hover:to-blue-600 transition-colors"
                                >
                                    立即预约
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                            <div className="relative overflow-hidden rounded-2xl shadow-xl">
                                <img
                                    src={serviceDetail.image}
                                    alt={serviceDetail.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 via-transparent to-transparent pointer-events-none"></div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-12 shadow-sm">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">服务内容</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {serviceItems.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-600">
                                        <span className="text-cyan-500 mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {relatedServices.length > 0 && (
                            <div className="mb-12">
                                <h3 className="text-xl font-semibold mb-4 text-gray-900">更多{categoryLabel}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {relatedServices.map(service => (
                                        <div key={service.id} className="p-5 rounded-xl border border-gray-200 bg-white hover:border-cyan-200 transition-colors">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.bg}`}>
                                                    <i className={`${service.icon} ${service.color} text-xl`}></i>
                                                </span>
                                                <div>
                                                    <p className="font-semibold text-gray-800">{service.title}</p>
                                                    <p className="text-xs text-gray-500 leading-relaxed truncate">{service.description}</p>
                                                </div>
                                            </div>
                                            <a href="#booking" className="text-sm text-cyan-600 hover:underline inline-flex items-center gap-1">
                                                预约此服务
                                                <i className="fas fa-arrow-right text-xs"></i>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('ServiceDetailPage component error:', error);
        if (typeof reportError === 'function') {
            reportError(error);
        }
    }
}
