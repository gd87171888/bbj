function TechNavbar() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };

        const scrollToContact = () => {
            const footer = document.getElementById('contact-section');
            if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
            }
        };

        return (
            <nav data-name="tech-navbar" className="bg-gray-900/80 backdrop-blur-md border-b border-cyan-500/20 fixed w-full z-50">
                <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                            <i className="fas fa-robot text-white text-sm sm:text-xl"></i>
                        </div>
                        <h1 className="text-xl sm:text-2xl font-bold tech-font text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            百百家<span className="text-xs align-top">PRO</span>
                        </h1>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-cyan-400 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-4 lg:space-x-8">
                        <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center text-sm lg:text-base">
                            <span className="mr-2"><i className="fas fa-home"></i></span>
                            <span>首页</span>
                        </a>
                        <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center text-sm lg:text-base">
                            <span className="mr-2"><i className="fas fa-cogs"></i></span>
                            <span>智能服务</span>
                        </a>
                        <a href="#interactive" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center text-sm lg:text-base">
                            <span className="mr-2"><i className="fas fa-gamepad"></i></span>
                            <span>互动体验</span>
                        </a>
                        <a href="#booking" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center text-sm lg:text-base">
                            <span className="mr-2"><i className="fas fa-calendar-alt"></i></span>
                            <span>极速预约</span>
                        </a>
                        <a href="#tech" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center text-sm lg:text-base">
                            <span className="mr-2"><i className="fas fa-microchip"></i></span>
                            <span>科技优势</span>
                        </a>
                    </div>
                    
                    {/* Contact Button - Hidden on small screens */}
                    <button 
                        onClick={scrollToContact}
                        className="hidden md:block tech-btn px-4 py-2 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base"
                    >
                        <i className="fas fa-phone-alt mr-2"></i> 联系我们
                    </button>
                    
                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg px-4 py-2 border-t border-gray-800">
                            <div className="flex flex-col space-y-3">
                                <a 
                                    href="#" 
                                    className="text-gray-300 hover:text-cyan-400 py-2 border-b border-gray-800"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <i className="fas fa-home mr-2"></i> 首页
                                </a>
                                <a 
                                    href="#services" 
                                    className="text-gray-300 hover:text-cyan-400 py-2 border-b border-gray-800"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <i className="fas fa-cogs mr-2"></i> 智能服务
                                </a>
                                <a 
                                    href="#interactive" 
                                    className="text-gray-300 hover:text-cyan-400 py-2 border-b border-gray-800"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <i className="fas fa-gamepad mr-2"></i> 互动体验
                                </a>
                                <a 
                                    href="#booking" 
                                    className="text-gray-300 hover:text-cyan-400 py-2 border-b border-gray-800"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <i className="fas fa-calendar-alt mr-2"></i> 极速预约
                                </a>
                                <a 
                                    href="#tech" 
                                    className="text-gray-300 hover:text-cyan-400 py-2 border-b border-gray-800"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <i className="fas fa-microchip mr-2"></i> 科技优势
                                </a>
                                <button 
                                    onClick={scrollToContact}
                                    className="tech-btn w-full py-2 rounded-full mt-2"
                                >
                                    <i className="fas fa-phone-alt mr-2"></i> 联系我们
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        );
    } catch (error) {
        console.error('TechNavbar component error:', error);
        reportError(error);
    }
}
