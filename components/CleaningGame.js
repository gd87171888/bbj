function CleaningGame() {
    const [spots, setSpots] = React.useState([]);
    const [score, setScore] = React.useState(0);
    const [gameStarted, setGameStarted] = React.useState(false);
    const [cleaning, setCleaning] = React.useState(false);
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        if (gameStarted && spots.length === 0) {
            generateSpots();
        }
    }, [gameStarted]);

    const generateSpots = () => {
        const newSpots = [];
        for (let i = 0; i < 15; i++) {
            newSpots.push({
                id: i,
                x: Math.random() * 80 + 10,
                y: Math.random() * 70 + 10,
                size: Math.random() * 30 + 20,
                opacity: 1
            });
        }
        setSpots(newSpots);
        setScore(0);
    };

    const cleanSpot = (spotId) => {
        setCleaning(true);
        setSpots(prevSpots => prevSpots.filter(spot => spot.id !== spotId));
        setScore(prev => prev + 10);
        setTimeout(() => setCleaning(false), 100);
    };

    const startGame = () => {
        setGameStarted(true);
        generateSpots();
    };

    const resetGame = () => {
        generateSpots();
    };

    return (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-cyan-400/30 shadow-xl">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1">
                        <i className="fas fa-spray-can mr-2"></i>清洁挑战
                    </h3>
                    <p className="text-gray-400 text-sm">点击清除所有污渍！</p>
                </div>
                <div className="text-right">
                    <div className="text-3xl font-bold text-cyan-400">{score}</div>
                    <div className="text-xs text-gray-400">积分</div>
                </div>
            </div>

            {!gameStarted ? (
                <div className="h-80 flex flex-col items-center justify-center bg-gray-900/50 rounded-xl border-2 border-dashed border-gray-700">
                    <i className="fas fa-broom text-6xl text-cyan-400/30 mb-4"></i>
                    <p className="text-gray-400 mb-6">准备好开始清洁了吗？</p>
                    <button 
                        onClick={startGame}
                        className="tech-btn px-6 py-3"
                    >
                        <i className="fas fa-play mr-2"></i>开始游戏
                    </button>
                </div>
            ) : (
                <>
                    <div 
                        ref={canvasRef}
                        className="relative h-80 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden cursor-pointer border-2 border-gray-700"
                        style={{ 
                            transition: 'transform 0.1s',
                            transform: cleaning ? 'scale(0.99)' : 'scale(1)'
                        }}
                    >
                        {spots.map(spot => (
                            <div
                                key={spot.id}
                                onClick={() => cleanSpot(spot.id)}
                                className="absolute rounded-full transition-all duration-300 hover:scale-110 cursor-pointer group"
                                style={{
                                    left: `${spot.x}%`,
                                    top: `${spot.y}%`,
                                    width: `${spot.size}px`,
                                    height: `${spot.size}px`,
                                    background: `radial-gradient(circle, rgba(139, 92, 46, ${spot.opacity}) 0%, rgba(101, 67, 33, ${spot.opacity * 0.8}) 50%, rgba(74, 48, 24, ${spot.opacity * 0.6}) 100%)`,
                                    boxShadow: `0 0 ${spot.size / 2}px rgba(139, 92, 46, 0.5)`,
                                    animation: 'pulse 2s infinite'
                                }}
                            >
                                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-cyan-400/30 transition-colors flex items-center justify-center">
                                    <i className="fas fa-times text-white/0 group-hover:text-white/80 text-xs"></i>
                                </div>
                            </div>
                        ))}
                        
                        {spots.length === 0 && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-400/20 to-blue-400/20 backdrop-blur-sm">
                                <div className="text-center">
                                    <i className="fas fa-check-circle text-6xl text-green-400 mb-4 animate-bounce"></i>
                                    <h4 className="text-2xl font-bold text-white mb-2">完美清洁！</h4>
                                    <p className="text-gray-300 mb-4">你获得了 {score} 积分</p>
                                    <button 
                                        onClick={resetGame}
                                        className="tech-btn px-6 py-2"
                                    >
                                        <i className="fas fa-redo mr-2"></i>再玩一次
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <div className="text-sm text-gray-400">
                            剩余污渍: <span className="text-cyan-400 font-bold">{spots.length}</span>
                        </div>
                        <button 
                            onClick={resetGame}
                            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
                        >
                            <i className="fas fa-sync-alt mr-2"></i>重置
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
