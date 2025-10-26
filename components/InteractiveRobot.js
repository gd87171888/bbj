function InteractiveRobot() {
    const [isActive, setIsActive] = React.useState(false);
    const [rotation, setRotation] = React.useState(0);
    const [clickCount, setClickCount] = React.useState(0);
    const [showFeature, setShowFeature] = React.useState(null);

    const features = [
        { id: 1, name: '激光导航', icon: 'fa-location-dot', color: 'text-cyan-400', description: '360度全方位扫描' },
        { id: 2, name: '智能避障', icon: 'fa-brain', color: 'text-purple-400', description: 'AI深度学习算法' },
        { id: 3, name: '纳米清洁', icon: 'fa-atom', color: 'text-green-400', description: '99.9%除菌率' },
        { id: 4, name: '自动充电', icon: 'fa-bolt', color: 'text-yellow-400', description: '续航4小时' }
    ];

    const handleRobotClick = () => {
        setIsActive(!isActive);
        setClickCount(prev => prev + 1);
        setRotation(prev => prev + 90);
    };

    const handleFeatureClick = (feature) => {
        setShowFeature(showFeature?.id === feature.id ? null : feature);
    };

    return (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-green-400/30 shadow-xl">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-1">
                        <i className="fas fa-robot mr-2"></i>智能机器人展示
                    </h3>
                    <p className="text-gray-400 text-sm">点击机器人探索功能</p>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{clickCount}</div>
                    <div className="text-xs text-gray-400">互动次数</div>
                </div>
            </div>

            <div className="relative h-80 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl overflow-hidden flex items-center justify-center">
                <div 
                    className="absolute inset-0 transition-all duration-1000"
                    style={{
                        background: isActive 
                            ? 'radial-gradient(circle at center, rgba(16, 185, 129, 0.1) 0%, transparent 70%)' 
                            : 'radial-gradient(circle at center, rgba(55, 65, 81, 0.3) 0%, transparent 70%)'
                    }}
                ></div>

                <div 
                    className="relative cursor-pointer transition-all duration-500 hover:scale-105"
                    onClick={handleRobotClick}
                    style={{ 
                        transform: `rotate(${rotation}deg)`,
                    }}
                >
                    <div className={`relative ${isActive ? 'animate-pulse' : ''}`}>
                        <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl shadow-2xl shadow-green-500/50 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                            <i className={`fas fa-robot text-6xl text-white ${isActive ? 'animate-bounce' : ''}`}></i>
                            
                            {isActive && (
                                <>
                                    <div className="absolute top-2 right-2 w-2 h-2 bg-green-300 rounded-full animate-ping"></div>
                                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                                </>
                            )}
                        </div>

                        {isActive && (
                            <div className="absolute inset-0 -z-10">
                                <div className="absolute inset-0 bg-green-400/30 rounded-3xl animate-ping"></div>
                            </div>
                        )}
                    </div>
                </div>

                {features.map((feature, index) => {
                    const angle = (index * 90) - 45;
                    const radius = 140;
                    const x = Math.cos(angle * Math.PI / 180) * radius;
                    const y = Math.sin(angle * Math.PI / 180) * radius;

                    return (
                        <div
                            key={feature.id}
                            onClick={() => handleFeatureClick(feature)}
                            className={`absolute cursor-pointer transition-all duration-300 hover:scale-110 ${
                                isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            }`}
                            style={{
                                left: '50%',
                                top: '50%',
                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                transitionDelay: `${index * 100}ms`
                            }}
                        >
                            <div className={`w-16 h-16 rounded-full bg-gray-800/90 border-2 border-gray-700 hover:border-green-400/50 flex items-center justify-center shadow-lg ${
                                showFeature?.id === feature.id ? 'border-green-400 bg-green-400/20' : ''
                            }`}>
                                <i className={`fas ${feature.icon} text-2xl ${feature.color}`}></i>
                            </div>
                        </div>
                    );
                })}
            </div>

            {showFeature && (
                <div className="mt-4 p-4 bg-gray-900/80 rounded-lg border border-green-400/30 animate-fadeIn">
                    <div className="flex items-center space-x-3">
                        <i className={`fas ${showFeature.icon} text-2xl ${showFeature.color}`}></i>
                        <div>
                            <h4 className="text-lg font-bold text-white">{showFeature.name}</h4>
                            <p className="text-gray-400 text-sm">{showFeature.description}</p>
                        </div>
                    </div>
                </div>
            )}

            {!isActive && (
                <div className="mt-4 text-center text-gray-500 text-sm">
                    <i className="fas fa-hand-pointer mr-2"></i>点击机器人激活
                </div>
            )}
        </div>
    );
}
