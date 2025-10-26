const TECH_SERVICES = ServiceCatalog.getServicesByCategory('tech');
const TRADITIONAL_SERVICES = ServiceCatalog.getServicesByCategory('traditional');

function ServiceGrid() {
    try {
        return (
            <section data-name="service-grid" id="services" className="py-12 md:py-20 bg-gray-900/50 relative">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-400/5 rounded-full filter blur-2xl sm:blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-purple-400/5 rounded-full filter blur-2xl sm:blur-3xl"></div>
                </div>
                
                <div className="container mx-auto px-4 sm:px-6 relative z-10 space-y-14 md:space-y-20">
                    <div className="text-center space-y-3 md:space-y-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tech-font text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                            科技服务矩阵
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                            融合前沿技术的家政服务解决方案，重新定义清洁标准
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {TECH_SERVICES.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                    <div className="text-center space-y-3 md:space-y-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tech-font text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
                            专业家政服务
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                            传承品质，专业团队为您提供贴心服务
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {TRADITIONAL_SERVICES.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('ServiceGrid component error:', error);
        if (typeof reportError === 'function') {
            reportError(error);
        }
    }
}
