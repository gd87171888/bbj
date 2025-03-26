function TechFooter() {
    try {
        return (
            <footer data-name="tech-footer" className="bg-gray-900/80 border-t border-gray-800 py-8 md:py-12">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        <div>
                            <div className="flex items-center mb-3 md:mb-4">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mr-2 md:mr-3">
                                    <i className="fas fa-robot text-white text-sm md:text-base"></i>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold tech-font">百百家PRO</h3>
                            </div>
                            <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">
                                融合科技与服务的未来家政体验，为您带来前所未有的清洁标准。
                            </p>
                            <div className="flex space-x-3 md:space-x-4">
                                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-400/10 hover:text-cyan-400 transition-colors text-sm md:text-base">
                                    <i className="fab fa-weixin"></i>
                                </a>
                                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-400/10 hover:text-cyan-400 transition-colors text-sm md:text-base">
                                    <i className="fab fa-weibo"></i>
                                </a>
                                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-400/10 hover:text-cyan-400 transition-colors text-sm md:text-base">
                                    <i className="fab fa-tiktok"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-gray-200 border-b border-gray-700 pb-1 md:pb-2">快速链接</h4>
                            <ul className="space-y-1 md:space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base">首页</a></li>
                                <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base">服务项目</a></li>
                                <li><a href="#tech" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base">科技优势</a></li>
                                <li><a href="#booking" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base">预约服务</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-gray-200 border-b border-gray-700 pb-1 md:pb-2">服务项目</h4>
                            <ul className="space-y-1 md:space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base">AI深度清洁</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base">纳米家电养护</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base">智能维修诊断</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base">全屋净化系统</a></li>
                            </ul>
                        </div>
                        <div id="contact-section">
                            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-gray-200 border-b border-gray-700 pb-1 md:pb-2">联系我们</h4>
                            <ul className="space-y-2 md:space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-phone-alt text-cyan-400 mt-0.5 md:mt-1 mr-2 md:mr-3 text-sm md:text-base"></i>
                                    <div>
                                        <p className="text-gray-400 text-sm md:text-base">客服热线</p>
                                        <p className="text-gray-200 text-sm md:text-base">13377797128</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-envelope text-cyan-400 mt-0.5 md:mt-1 mr-2 md:mr-3 text-sm md:text-base"></i>
                                    <div>
                                        <p className="text-gray-400 text-sm md:text-base">电子邮箱</p>
                                        <p className="text-gray-200 text-sm md:text-base">84922982@qq.com</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-map-marker-alt text-cyan-400 mt-0.5 md:mt-1 mr-2 md:mr-3 text-sm md:text-base"></i>
                                    <div>
                                        <p className="text-gray-400 text-sm md:text-base">公司地址</p>
                                        <p className="text-gray-200 text-sm md:text-base">东莞市樟木头科技产业园</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-gray-500 text-xs md:text-sm mb-3 sm:mb-0">
                            © 2023 百百家科技家政服务. 保留所有权利.
                        </p>
                        <div className="flex space-x-4 md:space-x-6">
                            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs md:text-sm">隐私政策</a>
                            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs md:text-sm">服务条款</a>
                            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs md:text-sm">使用协议</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('TechFooter component error:', error);
        reportError(error);
    }
}
