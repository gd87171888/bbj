function HeroSection() {
    try {
        return (
            <section data-name="hero-section" className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900"></div>
                    <div className="absolute inset-0 opacity-20">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0,0 L100,100 M50,0 L50,100 M0,50 L100,50" 
                                  stroke="rgba(0,240,255,0.3)" 
                                  strokeWidth="1"
                                  className="circuit-line"/>
                        </svg>
                    </div>
                </div>
                
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tech-font neon-text">
                                未来家政<span className="text-accent">.</span>科技体验
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                融合AI技术与专业服务的全新家政体验，让科技为您的家居生活带来革命性改变。
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                                <a href="#booking" className="tech-btn px-6 py-3 text-sm sm:text-base md:text-lg">
                                    <i className="fas fa-bolt mr-2"></i> 立即预约
                                </a>
                                <a href="#tech" className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400/10 transition-colors text-sm sm:text-base md:text-lg">
                                    <i className="fas fa-play-circle mr-2"></i> 观看演示
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-64 sm:h-80 md:h-96">
                                <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-20 h-20 sm:w-32 sm:h-32 bg-cyan-400/20 rounded-full filter blur-xl"></div>
                                <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-20 h-20 sm:w-32 sm:h-32 bg-purple-400/20 rounded-full filter blur-xl"></div>
                                <HomeApplianceAnimation />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('HeroSection component error:', error);
        reportError(error);
    }
}
