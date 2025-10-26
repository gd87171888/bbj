function ServicePuzzle() {
    const [pieces, setPieces] = React.useState([]);
    const [completed, setCompleted] = React.useState(false);
    const [draggedPiece, setDraggedPiece] = React.useState(null);
    const [timeSpent, setTimeSpent] = React.useState(0);
    const [timerActive, setTimerActive] = React.useState(false);

    const targetOrder = React.useMemo(() => ([
        { id: 'diagnose', label: '智能诊断', icon: 'fa-microscope', color: 'bg-cyan-500/20 border-cyan-400/50' },
        { id: 'plan', label: '方案制定', icon: 'fa-diagram-project', color: 'bg-purple-500/20 border-purple-400/50' },
        { id: 'execute', label: '执行清洁', icon: 'fa-hand-sparkles', color: 'bg-blue-500/20 border-blue-400/50' },
        { id: 'quality', label: '质量验证', icon: 'fa-shield-check', color: 'bg-green-500/20 border-green-400/50' }
    ]), []);

    React.useEffect(() => {
        const shuffledPieces = [...targetOrder]
            .map(item => ({ ...item, position: Math.random() * 200 }))
            .sort(() => Math.random() - 0.5);
        setPieces(shuffledPieces);
        setCompleted(false);
        setTimeSpent(0);
        setTimerActive(true);
    }, []);

    React.useEffect(() => {
        if (!timerActive) return;
        const interval = setInterval(() => {
            setTimeSpent(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timerActive]);

    const handleDragStart = (event, piece) => {
        setDraggedPiece(piece);
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', piece.id);
    };

    const handleDrop = (event, targetIndex) => {
        event.preventDefault();
        const sourcePiece = pieces.find(piece => piece.id === draggedPiece?.id);
        if (!sourcePiece) return;

        const newPieces = [...pieces];
        const sourceIndex = newPieces.findIndex(piece => piece.id === sourcePiece.id);
        const temp = newPieces[targetIndex];
        newPieces[targetIndex] = sourcePiece;
        newPieces[sourceIndex] = temp;

        setPieces(newPieces);
        setDraggedPiece(null);

        const isCompleted = newPieces.every((piece, index) => piece.id === targetOrder[index].id);
        if (isCompleted) {
            setCompleted(true);
            setTimerActive(false);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    const restartPuzzle = () => {
        const shuffledPieces = [...targetOrder]
            .map(item => ({ ...item, position: Math.random() * 200 }))
            .sort(() => Math.random() - 0.5);
        setPieces(shuffledPieces);
        setCompleted(false);
        setTimeSpent(0);
        setTimerActive(true);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-blue-400/30 shadow-xl">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1">
                        <i className="fas fa-puzzle-piece mr-2"></i>服务流程拼图
                    </h3>
                    <p className="text-gray-400 text-sm">拖拽步骤拼出高端服务流程</p>
                </div>
                <div className="text-right">
                    <div className="text-xl font-semibold text-blue-400">{formatTime(timeSpent)}</div>
                    <div className="text-xs text-gray-400">耗时</div>
                </div>
            </div>

            <div className="space-y-3">
                {targetOrder.map((_, index) => {
                    const piece = pieces[index];
                    return (
                        <div
                            key={index}
                            onDrop={(event) => handleDrop(event, index)}
                            onDragOver={handleDragOver}
                            className={`h-16 rounded-xl border-2 border-dashed border-blue-400/40 flex items-center justify-center transition-all duration-300 ${
                                completed ? 'border-green-400/50 bg-green-500/10' : 'hover:border-blue-400/80 hover:bg-blue-500/5'
                            }`}
                        >
                            {piece && (
                                <div
                                    draggable={!completed}
                                    onDragStart={(event) => handleDragStart(event, piece)}
                                    className={`w-full h-full flex items-center px-4 space-x-3 rounded-xl border ${piece.color} ${
                                        completed && piece.id === targetOrder[index].id ? 'border-green-400/70 bg-green-500/10' : 'bg-gray-800/80 border-gray-700'
                                    } ${draggedPiece?.id === piece.id ? 'opacity-70' : ''}`}
                                >
                                    <div className="w-10 h-10 rounded-full bg-gray-900/70 flex items-center justify-center">
                                        <i className={`fas ${piece.icon} text-xl text-blue-300`}></i>
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">{piece.label}</div>
                                        <div className="text-xs text-gray-400">{index + 1 < targetOrder.length ? '连接下一步流程' : '完成服务'}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {completed ? (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-400/40 rounded-xl text-sm text-green-200">
                    <div className="flex items-center">
                        <i className="fas fa-star mr-2"></i>
                        <span>恭喜！你在 {formatTime(timeSpent)} 内完成了智能服务流程拼图。</span>
                    </div>
                </div>
            ) : (
                <div className="mt-4 text-sm text-gray-400">
                    <i className="fas fa-lightbulb mr-2 text-cyan-300"></i>
                    提示：正确顺序是诊断 → 方案 → 执行 → 验证
                </div>
            )}

            <div className="mt-4 flex items-center justify-end">
                <button 
                    onClick={restartPuzzle}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
                >
                    <i className="fas fa-redo mr-2"></i>重新排列
                </button>
            </div>
        </div>
    );
}
