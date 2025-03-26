function ServiceGrid() {
    try {
        const techServices = [
            {
                id: 'tech-1',
                title: 'AI深度清洁',
                description: '智能识别污渍分布，机器人辅助清洁团队，实现99.9%杀菌率',
                icon: 'fas fa-robot',
                color: 'text-cyan-400',
                bg: 'bg-cyan-400/10',
                type: 'tech'
            },
            {
                id: 'tech-2',
                title: '纳米家电养护',
                description: '采用纳米涂层技术，延长家电寿命，减少70%细菌滋生',
                icon: 'fas fa-microchip',
                color: 'text-purple-400',
                bg: 'bg-purple-400/10',
                type: 'tech'
            }
        ];

        const traditionalServices = [
            {
                id: 'basic-1',
                title: '日常保洁',
                description: '专业团队提供全屋基础清洁，包括地面、家具表面等',
                icon: 'fas fa-broom',
                color: 'text-orange-400',
                bg: 'bg-orange-400/10',
                type: 'traditional'
            },
            {
                id: 'basic-2',
                title: '深度清洁',
                description: '针对厨房油污、卫生间水垢等顽固污渍的彻底清洁',
                icon: 'fas fa-spray-can',
                color: 'text-blue-400',
                bg: 'bg-blue-400/10',
                type: 'traditional'
            },
            {
                id: 'basic-3',
                title: '家电清洗',
                description: '空调、洗衣机、冰箱等家电的专业清洁保养服务',
                icon: 'fas fa-tv',
                color: 'text-green-400',
                bg: 'bg-green-400/10',
                type: 'traditional'
            },
            {
                id: 'basic-4',
                title: '家电维修',
                description: '各类家电故障检测与维修，专业技师上门服务',
                icon: 'fas fa-tools',
                color: 'text-red-400',
                bg: 'bg-red-400/10',
                type: 'traditional'
            }
        ];

        return (
            <section data-name="service-grid" id="services" className="py-12 md:py-20 bg-gray-900/50 relative">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-400/5 rounded-full filter blur-2xl sm:blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-purple-400/5 rounded-full filter blur-2xl sm:blur-3xl"></div>
                </div>
                
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    {/* 科技服务部分 */}
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tech-font mb-2 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                            科技服务矩阵
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                            融合前沿技术的家政服务解决方案，重新定义清洁标准
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 md:mb-20">
                        {techServices.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                    {/* 传统服务部分 */}
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tech-font mb-2 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
                            专业家政服务
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                            传承品质，专业团队为您提供贴心服务
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {traditionalServices.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('ServiceGrid component error:', error);
        reportError(error);
    }
}
