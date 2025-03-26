function BookingPanel() {
    try {
        const [activeTab, setActiveTab] = React.useState('tech');
        const [formData, setFormData] = React.useState({
            name: '',
            phone: '',
            serviceType: 'tech-1',
            address: '',
            date: '',
            time: '',
            notes: ''
        });
        const [isSubmitting, setIsSubmitting] = React.useState(false);
        const [submitStatus, setSubmitStatus] = React.useState(null);

        const serviceOptions = {
            tech: [
                { value: 'tech-1', label: 'AI深度清洁' },
                { value: 'tech-2', label: '纳米家电养护' }
            ],
            traditional: [
                { value: 'basic-1', label: '日常保洁' },
                { value: 'basic-2', label: '深度清洁' },
                { value: 'basic-3', label: '家电清洗' },
                { value: 'basic-4', label: '家电维修' }
            ]
        };

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            setSubmitStatus(null);
            
            try {
                // 模拟API调用
                await new Promise(resolve => setTimeout(resolve, 1500));
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    phone: '',
                    serviceType: 'tech-1',
                    address: '',
                    date: '',
                    time: '',
                    notes: ''
                });
            } catch (error) {
                setSubmitStatus('error');
            } finally {
                setIsSubmitting(false);
            }
        };

        const handleTabChange = (tab) => {
            setActiveTab(tab);
            setFormData(prev => ({
                ...prev,
                serviceType: `${tab}-1`
            }));
        };

        return (
            <section data-name="booking-panel" id="booking" className="py-20 bg-gray-900/70 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="tech-card p-8 md:p-12">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                                    <h2 className="text-3xl font-bold tech-font mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                                        极速预约
                                    </h2>
                                    <div className="flex space-x-2 mb-6">
                                        <button
                                            onClick={() => handleTabChange('tech')}
                                            className={`px-4 py-2 rounded-full ${activeTab === 'tech' ? 'tech-btn' : 'bg-gray-800 text-gray-300'}`}
                                        >
                                            科技服务
                                        </button>
                                        <button
                                            onClick={() => handleTabChange('traditional')}
                                            className={`px-4 py-2 rounded-full ${activeTab === 'traditional' ? 'tech-btn' : 'bg-gray-800 text-gray-300'}`}
                                        >
                                            传统服务
                                        </button>
                                    </div>
                                    <p className="text-gray-300 mb-6">
                                        填写基本信息，我们的{activeTab === 'tech' ? '智能调度系统' : '专业客服'}将尽快与您联系确认。
                                    </p>
                                </div>
                                <div className="md:w-1/2">
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* 表单字段保持不变... */}
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
        reportError(error);
    }
}
