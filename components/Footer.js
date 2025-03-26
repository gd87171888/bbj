function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">百家家</h3>
                            <p className="text-gray-300">专业家政服务平台，为您提供优质的上门服务。</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">联系方式</h3>
                            <ul className="space-y-2">
                                <li><i className="fas fa-phone-alt mr-2"></i> 13377797128</li>
                                <li><i className="fas fa-envelope mr-2"></i> 84922982@qq.com</li>
                                <li><i className="fas fa-map-marker-alt mr-2"></i> 东莞市樟木头</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">微信客服</h3>
                            <div className="flex flex-col items-start">
                                <img 
                                    src="https://t.kmjz8.eu.org/123.jpg" 
                                    alt="百家家微信客服" 
                                    className="w-32 h-32 object-contain mb-2 border border-white rounded"
                                />
                                <p className="text-gray-300 text-sm">扫码添加微信咨询</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                        <p>© 2023 百家家家政服务. 保留所有权利.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}
