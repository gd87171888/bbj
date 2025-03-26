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
                image: 'https://images.unsplash.com/photo-1620217497699-6d8059989f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' // 更新为更合适的家电清洗图片
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

        // 其余代码保持不变...
    } catch (error) {
        console.error('ServiceDetailPage component error:', error);
        reportError(error);
    }
}
