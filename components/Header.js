function Header() {
    try {
        return (
            <header data-name="header" className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Logo />
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="#" className="text-gray-600 hover:text-cyan-500">首页</a></li>
                            <li><a href="#services" className="text-gray-600 hover:text-cyan-500">服务</a></li>
                            <li><a href="#booking" className="text-gray-600 hover:text-cyan-500">预约</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
