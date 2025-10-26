function ServiceCard({ service }) {
    try {
        const backgroundClass = service.bg || 'bg-gray-800/40';
        const hoverBackgroundClass = backgroundClass.includes('10') ? `hover:${backgroundClass.replace('10', '20')}` : '';
        const hoverOpacityClass = backgroundClass.includes('10') ? '' : 'hover:opacity-90';
        const accentColor = service.color || 'text-cyan-400';
        const iconClass = service.icon || 'fas fa-star';

        return (
            <div 
                data-name="service-card" 
                className={`tech-card p-6 ${backgroundClass} ${hoverBackgroundClass} ${hoverOpacityClass} transition-all duration-300 relative overflow-hidden`}
            >
                {/* 装饰元素 - 根据服务类型不同 */}
                {service.type === 'tech' && (
                    <div className="absolute -right-6 -top-6 opacity-20">
                        <i className={`${iconClass} text-6xl ${accentColor}`}></i>
                    </div>
                )}
                {service.type === 'traditional' && (
                    <div className="absolute -right-4 -top-4 opacity-10">
                        <svg width="80" height="80" viewBox="0 0 24 24" className={accentColor}>
                            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                        </svg>
                    </div>
                )}
                
                <div className={`w-16 h-16 ${backgroundClass} rounded-xl flex items-center justify-center mb-6 relative z-10`}>
                    <i className={`${iconClass} ${accentColor} text-2xl`}></i>
                </div>
                <h3 className={`text-xl font-bold mb-3 relative z-10 ${accentColor}`}>{service.title}</h3>
                <p className="text-gray-300 mb-4 relative z-10">{service.description}</p>
                <a 
                    href="#booking" 
                    className={`inline-flex items-center text-sm ${accentColor} hover:underline relative z-10`}
                >
                    了解更多 <i className="fas fa-arrow-right ml-1"></i>
                </a>
            </div>
        );
    } catch (error) {
        console.error('ServiceCard component error:', error);
        reportError(error);
    }
}
