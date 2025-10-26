function BeforeAfterSlider() {
    const containerRef = React.useRef(null);
    const [position, setPosition] = React.useState(50);
    const [isDragging, setIsDragging] = React.useState(false);

    const handleMove = React.useCallback((clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        let newPosition = ((clientX - rect.left) / rect.width) * 100;
        newPosition = Math.max(0, Math.min(100, newPosition));
        setPosition(newPosition);
    }, []);

    const handleMouseDown = (event) => {
        setIsDragging(true);
        handleMove(event.clientX);
    };

    const handleMouseMove = React.useCallback((event) => {
        if (!isDragging) return;
        handleMove(event.clientX);
    }, [isDragging, handleMove]);

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    React.useEffect(() => {
        if (!isDragging) return;
        const handleGlobalMouseUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleGlobalMouseUp);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mouseup', handleGlobalMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDragging, handleMouseMove]);

    const handleTouchStart = (event) => {
        setIsDragging(true);
        handleMove(event.touches[0].clientX);
    };

    const handleTouchMove = (event) => {
        if (!isDragging) return;
        handleMove(event.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-purple-400/30 shadow-xl">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1">
                        <i className="fas fa-adjust mr-2"></i>清洁前后对比
                    </h3>
                    <p className="text-gray-400 text-sm">滑动查看科技清洁效果</p>
                </div>
                <div className="bg-purple-500/20 border border-purple-400/40 px-3 py-1 rounded-full text-xs text-purple-200">
                    AI增强视觉
                </div>
            </div>

            <div className="relative h-72 rounded-xl overflow-hidden group" ref={containerRef}>
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80"
                        alt="Before cleaning"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-full text-xs flex items-center space-x-2">
                        <i className="fas fa-cloud-meatball text-red-400"></i>
                        <span className="text-gray-200">清洁前</span>
                    </div>
                </div>

                <div 
                    className="absolute inset-0" 
                    style={{ width: `${position}%`, overflow: 'hidden' }}
                >
                    <img 
                        src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80"
                        alt="After cleaning"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 right-4 bg-black/60 px-4 py-2 rounded-full text-xs flex items-center space-x-2">
                        <i className="fas fa-sparkles text-green-400"></i>
                        <span className="text-gray-200">清洁后</span>
                    </div>
                </div>

                <div
                    className="absolute top-0 bottom-0"
                    style={{ left: `calc(${position}% - 1px)` }}
                >
                    <div className="w-1 h-full bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400 shadow-2xl shadow-purple-500/30"></div>
                </div>

                <button
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseUp={handleMouseUp}
                    className="absolute top-1/2 -translate-y-1/2"
                    style={{ left: `calc(${position}% - 30px)` }}
                >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-4 border-white/70 shadow-lg shadow-purple-500/50 flex items-center justify-center text-white text-xl transition-transform group-hover:scale-110">
                        <i className="fas fa-arrows-alt-h"></i>
                    </div>
                </button>
            </div>
        </div>
    );
}
