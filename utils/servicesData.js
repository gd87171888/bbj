(function(global) {
    const techServices = Object.freeze([
        Object.freeze({
            id: 'tech-1',
            title: 'AI深度清洁',
            description: '智能识别污渍分布，机器人辅助清洁团队，实现99.9%杀菌率',
            icon: 'fas fa-robot',
            color: 'text-cyan-400',
            bg: 'bg-cyan-400/10',
            type: 'tech',
            badge: '旗舰服务'
        }),
        Object.freeze({
            id: 'tech-2',
            title: '纳米家电养护',
            description: '采用纳米涂层技术，延长家电寿命，减少70%细菌滋生',
            icon: 'fas fa-microchip',
            color: 'text-purple-400',
            bg: 'bg-purple-400/10',
            type: 'tech',
            badge: '年度新品'
        })
    ]);

    const traditionalServices = Object.freeze([
        Object.freeze({
            id: 'basic-1',
            title: '日常保洁',
            description: '专业团队提供全屋基础清洁，包括地面、家具表面等',
            icon: 'fas fa-broom',
            color: 'text-orange-400',
            bg: 'bg-orange-400/10',
            type: 'traditional'
        }),
        Object.freeze({
            id: 'basic-2',
            title: '深度清洁',
            description: '针对厨房油污、卫生间水垢等顽固污渍的彻底清洁',
            icon: 'fas fa-spray-can',
            color: 'text-blue-400',
            bg: 'bg-blue-400/10',
            type: 'traditional'
        }),
        Object.freeze({
            id: 'basic-3',
            title: '家电清洗',
            description: '空调、洗衣机、冰箱等家电的专业清洁保养服务',
            icon: 'fas fa-tv',
            color: 'text-green-400',
            bg: 'bg-green-400/10',
            type: 'traditional'
        }),
        Object.freeze({
            id: 'basic-4',
            title: '家电维修',
            description: '各类家电故障检测与维修，专业技师上门服务',
            icon: 'fas fa-tools',
            color: 'text-red-400',
            bg: 'bg-red-400/10',
            type: 'traditional'
        })
    ]);

    const serviceDetails = Object.freeze({
        'tech-1': Object.freeze({
            id: 'tech-1',
            category: 'tech',
            title: 'AI深度清洁',
            description: '通过AI视觉系统精准识别污渍类型与位置，机器人与人工团队协同作业，实现全屋深度洁净与全面消毒，适合追求高标准卫生环境的家庭。',
            price: '¥299起',
            duration: '3-4小时',
            includes: Object.freeze([
                'AI智能污渍扫描与评估',
                '机器人辅助实现高频打磨',
                '纳米级抛光与防护处理',
                '全屋空气质量检测与除菌',
                '全流程高温蒸汽消毒'
            ]),
            image: 'https://images.unsplash.com/photo-1495570689269-d883b1213753?auto=format&fit=crop&w=1200&q=80'
        }),
        'tech-2': Object.freeze({
            id: 'tech-2',
            category: 'tech',
            title: '纳米家电养护',
            description: '利用纳米涂层与传感监测技术，对家电进行深度清洁、寿命评估与防护养护，降低故障风险，恢复设备高效运行状态。',
            price: '¥199起 / 台',
            duration: '1-2小时 / 台',
            includes: Object.freeze([
                '核心部件精细拆洗与杀菌',
                '纳米涂层涂覆延缓老化',
                '传感器实时检测运行状态',
                '耗材寿命评估与更换建议',
                '后续养护计划与提醒'
            ]),
            image: 'https://images.unsplash.com/photo-1581579186989-5f144763d238?auto=format&fit=crop&w=1200&q=80'
        }),
        'basic-1': Object.freeze({
            id: 'basic-1',
            category: 'traditional',
            title: '日常保洁',
            description: '全屋日常保洁服务涵盖地面清洁、家具表面擦拭、厨房与卫生间基础清洁，使用环保清洁剂保障家庭成员健康。',
            price: '¥50起',
            duration: '2-3小时',
            includes: Object.freeze([
                '全屋地面清洁',
                '家具表面擦拭',
                '厨房基础清洁',
                '卫生间基础清洁',
                '垃圾清理与分类'
            ]),
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
        }),
        'basic-2': Object.freeze({
            id: 'basic-2',
            category: 'traditional',
            title: '深度清洁',
            description: '针对厨房油污、卫生间水垢等顽固污渍提供深度清洁，包含抽油烟机拆洗、瓷砖缝隙清洁、卫浴除垢等项目，让家居焕然一新。',
            price: '¥60起',
            duration: '4-6小时',
            includes: Object.freeze([
                '抽油烟机深度拆洗',
                '厨房油污彻底清除',
                '卫生间水垢去除',
                '瓷砖与缝隙精细清洁',
                '卫浴设备全面除垢'
            ]),
            image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80'
        }),
        'basic-3': Object.freeze({
            id: 'basic-3',
            category: 'traditional',
            title: '家电清洗',
            description: '适用于空调、洗衣机、冰箱等常用家电的内部清洁与消毒，减少细菌滋生，提升家电运行效率并延长使用寿命。',
            price: '¥50起',
            duration: '1-2小时 / 台',
            includes: Object.freeze([
                '空调内部拆洗与除菌',
                '洗衣机内筒高温消毒',
                '冰箱除霜与异味处理',
                '微波炉与烤箱内部清洁',
                '饮水机出水口消毒'
            ]),
            image: 'https://images.unsplash.com/photo-1620217497699-6d8059989f40?auto=format&fit=crop&w=1200&q=80'
        }),
        'basic-4': Object.freeze({
            id: 'basic-4',
            category: 'traditional',
            title: '家电维修',
            description: '专业技师提供各类家用电器的故障检测与维修，使用原厂或高品质配件，确保维修质量与安全。',
            price: '检测费 ¥80起',
            duration: '视情况而定',
            includes: Object.freeze([
                '空调故障检测与维修',
                '冰箱制冷系统维护',
                '洗衣机控制系统检修',
                '电视与影音设备调试',
                '小家电快速维修'
            ]),
            image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&w=1200&q=80'
        })
    });

    const legacyIdMap = Object.freeze({
        '1': 'basic-1',
        '2': 'basic-2',
        '3': 'basic-3',
        '4': 'basic-4'
    });

    function normalizeId(id) {
        return legacyIdMap[id] || id;
    }

    function getServicesByCategory(category) {
        if (category === 'tech') {
            return techServices;
        }
        if (category === 'traditional') {
            return traditionalServices;
        }
        return [];
    }

    function getAllServices() {
        return techServices.concat(traditionalServices);
    }

    function getServiceById(id) {
        const normalizedId = normalizeId(id);
        return getAllServices().find(service => service.id === normalizedId) || null;
    }

    function getServiceOptions(category) {
        return getServicesByCategory(category).map(service => ({
            value: service.id,
            label: service.title
        }));
    }

    function getDefaultServiceId(category) {
        const [first] = getServicesByCategory(category);
        return first ? first.id : null;
    }

    function getServiceDetail(id) {
        const normalizedId = normalizeId(id);
        return serviceDetails[normalizedId] || null;
    }

    global.ServiceCatalog = Object.freeze({
        categories: Object.freeze({
            tech: techServices,
            traditional: traditionalServices
        }),
        getAllServices,
        getServiceById,
        getServicesByCategory,
        getServiceOptions,
        getDefaultServiceId,
        getServiceDetail,
        legacyIdMap,
        normalizeId
    });
})(window);
