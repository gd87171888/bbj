function Logo() {
    try {
        return (
            <div data-name="logo" className="flex items-center">
                <div className="relative w-10 h-10 mr-2">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-spin-slow"></div>
                    <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                        <i className="fas fa-home text-cyan-500 text-xl"></i>
                    </div>
                </div>
                <h1 className="text-xl font-bold text-gray-800">
                    <span className="text-cyan-500">百</span>
                    <span className="text-blue-500">家</span>
                    <span className="text-purple-500">家</span>
                </h1>
            </div>
        );
    } catch (error) {
        console.error('Logo component error:', error);
        reportError(error);
    }
}
