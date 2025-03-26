function TechFeatures() {
    try {
        const features = [
            {
                title: "智能调度系统",
                description: "AI算法优化服务路线，减少等待时间，提升30%服务效率",
                icon: "fas fa-brain"
            },
            {
                title: "机械辅助设备",
                description: "专业级清洁机器人配合人工，死角清洁覆盖率提升至99%",
                icon: "fas fa-robot"
            },
            {
                title: "纳米清洁技术",
                description: "采用军工级纳米材料，形成持久保护层，防污防菌",
                icon: "fas fa-atom"
            },
            {
                title: "AR远程诊断",
                description: "专家团队通过AR技术远程指导，快速解决复杂问题",
                icon: "fas fa-vr-cardboard"
            }
        ];

        return (
            <section data-name="tech-features" id="tech" className="py-20 bg-gradient-to-b from-gray-900 to-gray-900/50 relative overflow-hidden">
                <TechAnimation canvasId="tech-features-animation" />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                            <h2 className="text-3xl md:text-4xl font-bold tech-font mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                                科技驱动 <br/> 极致服务体验
                            </h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                我们不只是清洁，更是用科技重新定义家政服务标准。从智能调度到纳米技术，每一个细节都经过精心设计，为您带来前所未有的服务体验。
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {features.slice(0, 2).map((feature, index) => (
                                    <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-400/30 transition-colors hover:shadow-lg hover:shadow-cyan-400/10">
                                        <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-3">
                                            <i className={`${feature.icon} text-cyan-400 text-xl`}></i>
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2 text-gray-100">{feature.title}</h3>
                                        <p className="text-gray-400 text-sm">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative h-full min-h-[400px]">
                                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                    <TechAnimation canvasId="tech-features-right-animation" />
                                </div>
                                <div className="relative bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden h-full flex flex-col justify-center p-8 backdrop-blur-sm">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-purple-400/10 rounded-full flex items-center justify-center mr-3">
                                            <i className="fas fa-shield-alt text-purple-400"></i>
                                        </div>
                                        <h3 className="text-xl font-semibold">智能防护系统</h3>
                                    </div>
                                    <p className="text-gray-400 mb-6">
                                        全流程消毒防护，服务人员健康监测，确保100%安全服务
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {features.slice(2).map((feature, index) => (
                                            <div key={index} className="bg-gray-800/30 p-4 rounded-lg border border-gray-700 hover:border-purple-400/30 transition-colors hover:shadow-lg hover:shadow-purple-400/10">
                                                <div className="w-10 h-10 bg-purple-400/10 rounded-lg flex items-center justify-center mb-2">
                                                    <i className={`${feature.icon} text-purple-400 text-lg`}></i>
                                                </div>
                                                <h4 className="text-md font-semibold mb-1 text-gray-100">{feature.title}</h4>
                                                <p className="text-gray-400 text-xs">{feature.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('TechFeatures component error:', error);
        reportError(error);
    }
}
