function BookingPanel() {
    try {
        const {
            activeTab,
            formData,
            handleChange,
            handleTabChange,
            handleSubmit,
            isSubmitting,
            submitStatus,
            serviceOptions,
            isFormValid
        } = useBookingFormState('tech');

        const highlightItems = activeTab === 'tech'
            ? [
                'AI调度系统实时匹配最优服务团队',
                '机器人辅助与纳米技术保障极致洁净',
                '服务全过程可视化，实时追踪进度'
            ]
            : [
                '本地专业师傅上门，服务经验丰富',
                '严选清洁用品，安全环保无异味',
                '标准化流程执行，服务结果可验收'
            ];
        const adminPhone = typeof BOOKING_ADMIN_PHONE !== 'undefined' ? BOOKING_ADMIN_PHONE : '13377797128';

        return (
            <section data-name="booking-panel" id="booking" className="py-20 bg-gray-900/70 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-10 -right-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="tech-card p-8 md:p-12">
                            <div className="flex flex-col md:flex-row md:items-start gap-10">
                                <div className="md:w-1/2 space-y-6">
                                    <h2 className="text-3xl font-bold tech-font text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                                        极速预约
                                    </h2>
                                    <div className="flex space-x-2">
                                        <button
                                            type="button"
                                            onClick={() => handleTabChange('tech')}
                                            className={`px-4 py-2 rounded-full transition-colors duration-150 ${activeTab === 'tech' ? 'tech-btn shadow shadow-cyan-500/40' : 'bg-gray-800 text-gray-300 hover:text-cyan-400'}`}
                                        >
                                            科技服务
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleTabChange('traditional')}
                                            className={`px-4 py-2 rounded-full transition-colors duration-150 ${activeTab === 'traditional' ? 'tech-btn shadow shadow-cyan-500/40' : 'bg-gray-800 text-gray-300 hover:text-cyan-400'}`}
                                        >
                                            传统服务
                                        </button>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">
                                        {activeTab === 'tech'
                                            ? '由智能调度系统自动匹配最优团队，30分钟内回电确认，上门前完成全流程提醒。'
                                            : '资深家政团队按照您的时间安排上门服务，确保清洁与维修需求一次到位。'}
                                    </p>
                                    <ul className="space-y-3 text-sm text-gray-400">
                                        {highlightItems.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="text-cyan-400 mt-1">
                                                    <i className="fas fa-circle text-xs"></i>
                                                </span>
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="md:w-1/2 w-full">
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <BookingFormFields
                                            formData={formData}
                                            onChange={handleChange}
                                            serviceOptions={serviceOptions}
                                            isSubmitting={isSubmitting}
                                            variant="panel"
                                        />

                                        <button
                                            type="submit"
                                            disabled={isSubmitting || !isFormValid}
                                            className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-shadow duration-150 shadow-lg shadow-cyan-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? '提交中...' : '提交预约请求'}
                                        </button>

                                        <BookingStatusAlert status={submitStatus} variant="panel" />

                                        <p className="text-xs text-gray-500 text-center">
                                            提交后我们将通过客服热线 <span className="text-cyan-400">{adminPhone}</span> 与您确认，请保持电话畅通。
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('BookingPanel component error:', error);
        if (typeof reportError === 'function') {
            reportError(error);
        }
    }
}
