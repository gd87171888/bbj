function InteractiveZone() {
    const [activeTab, setActiveTab] = React.useState('game');

    const tabs = [
        { id: 'game', label: '清洁挑战', icon: 'fa-spray-can', component: CleaningGame },
        { id: 'compare', label: '效果对比', icon: 'fa-adjust', component: BeforeAfterSlider },
        { id: 'robot', label: '智能机器人', icon: 'fa-robot', component: InteractiveRobot },
        { id: 'puzzle', label: '流程拼图', icon: 'fa-puzzle-piece', component: ServicePuzzle }
    ];

    const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

    return (
        <section data-name="interactive-zone" id="interactive" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[128px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
                        <i className="fas fa-gamepad text-cyan-400"></i>
                        <span className="text-cyan-300 text-sm font-semibold">互动体验区</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tech-font mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                        探索未来家政
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        通过互动游戏和演示，深入了解我们的科技服务理念和专业流程
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                                activeTab === tab.id
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50 scale-105'
                                    : 'bg-gray-800/50 text-gray-400 hover:text-gray-200 hover:bg-gray-800 border border-gray-700'
                            }`}
                        >
                            <i className={`fas ${tab.icon}`}></i>
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    {ActiveComponent && (
                        <div className="animate-fadeIn">
                            <ActiveComponent />
                        </div>
                    )}
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-400/20">
                        <div className="w-16 h-16 mx-auto bg-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                            <i className="fas fa-chart-line text-3xl text-cyan-400"></i>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">效率提升</h4>
                        <p className="text-gray-400 text-sm">AI技术让服务效率提升 <span className="text-cyan-400 font-bold">30%</span></p>
                    </div>

                    <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
                        <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                            <i className="fas fa-users text-3xl text-purple-400"></i>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">客户满意</h4>
                        <p className="text-gray-400 text-sm">用户满意度高达 <span className="text-purple-400 font-bold">98.5%</span></p>
                    </div>

                    <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
                        <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                            <i className="fas fa-certificate text-3xl text-green-400"></i>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">质量保证</h4>
                        <p className="text-gray-400 text-sm">清洁覆盖率达到 <span className="text-green-400 font-bold">99.9%</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
