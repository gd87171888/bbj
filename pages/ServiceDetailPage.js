function ServiceDetailPage({ serviceId }) {
    try {
        const services = {
            '1': {
                title: '日常清洁',
                description: '我们的日常清洁服务包括全屋地面清洁、家具表面擦拭、厨房和卫生间的基本清洁等。专业团队使用环保清洁剂，确保您的家居环境既干净又安全。',
                price: '¥50起',
                duration: '2-3小时',
                includes: [
                    '全屋地面清洁',
                    '家具表面擦拭',
                    '厨房基本清洁',
                    '卫生间基本清洁',
                    '垃圾清理'
                ],
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            },
            '2': {
                title: '深度清洁',
                description: '深度清洁服务针对厨房油污、卫生间水垢等顽固污渍进行彻底清洁。包括抽油烟机清洗、瓷砖缝隙清洁、卫浴设备除垢等，让您的家居焕然一新。',
                price: '¥60起',
                duration: '4-6小时',
                includes: [
                    '抽油烟机深度清洁',
                    '厨房油污彻底清除',
                    '卫生间水垢去除',
                    '瓷砖缝隙清洁',
                    '卫浴设备除垢'
                ],
                image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            },
            '3': {
                title: '家电清洁',
                description: '专业家电清洁服务包括空调、洗衣机、冰箱等家用电器的内部清洁和消毒。定期清洁家电不仅能延长使用寿命，还能保障家人健康。',
                price: '¥50起',
                duration: '1-2小时/台',
                includes: [
                    '空调内部清洁',
                    '洗衣机内筒消毒',
                    '冰箱除霜清洁',
                    '微波炉内部清洁',
                    '饮水机消毒'
                ],
                image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            },
            '4': {
                title: '家电维修',
                description: '我们的家电维修服务覆盖各类家用电器故障检测与维修。专业技师团队，原厂配件，为您提供快速可靠的家电维修解决方案。',
                price: '检测费¥80起',
                duration: '视情况而定',
                includes: [
                    '空调维修',
                    '冰箱维修',
                    '洗衣机维修',
                    '电视机维修',
                    '小家电维修'
                ],
                image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            }
        };

        const service = services[serviceId] || services['1'];

        return (
            <div data-name="service-detail-page" className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow py-8">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                            <div>
                                <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <div className="flex items-center mb-4">
                                    <span className="font-semibold mr-4">价格: {service.price}</span>
                                    <span className="font-semibold">时长: {service.duration}</span>
                                </div>
                                <a 
                                    href="#booking" 
                                    className="inline-block px-6 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors"
                                >
                                    立即预约
                                </a>
                            </div>
                            <div>
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-auto rounded-lg shadow-md"
                                />
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold mb-4">服务内容</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {service.includes.map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('ServiceDetailPage component error:', error);
        reportError(error);
    }
}
