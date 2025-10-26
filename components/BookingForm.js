const BOOKING_ADMIN_EMAIL = '84922982@qq.com';
const BOOKING_ADMIN_PHONE = '13377797128';
const REQUIRED_BOOKING_FIELDS = ['name', 'phone', 'serviceType', 'address', 'date', 'time'];

if (typeof window !== 'undefined') {
    window.BOOKING_ADMIN_EMAIL = BOOKING_ADMIN_EMAIL;
    window.BOOKING_ADMIN_PHONE = BOOKING_ADMIN_PHONE;
}

function escapeHtml(value) {
    if (value === null || value === undefined) {
        return '';
    }

    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function createInitialFormState(category = 'tech') {
    return {
        name: '',
        phone: '',
        serviceType: ServiceCatalog.getDefaultServiceId(category) || '',
        address: '',
        date: '',
        time: '',
        notes: ''
    };
}

function getCategoryLabel(category) {
    return category === 'tech' ? '科技服务' : '传统服务';
}

function formatBookingEmail(formData, category) {
    const service = ServiceCatalog.getServiceById(formData.serviceType);
    const serviceTitle = service ? service.title : '未选择服务';
    const requestedDate = `${escapeHtml(formData.date)} ${escapeHtml(formData.time)}`.trim();

    return `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #1f2937;">
            <h2 style="color: #0891b2; font-size: 20px;">新的预约请求</h2>
            <p><strong>服务类型：</strong>${escapeHtml(getCategoryLabel(category))} - ${escapeHtml(serviceTitle)}</p>
            <p><strong>联系人：</strong>${escapeHtml(formData.name)}</p>
            <p><strong>联系电话：</strong>${escapeHtml(formData.phone)}</p>
            <p><strong>服务地址：</strong>${escapeHtml(formData.address)}</p>
            <p><strong>预约时间：</strong>${requestedDate || '未填写'}</p>
            ${formData.notes ? `<p><strong>备注信息：</strong>${escapeHtml(formData.notes)}</p>` : ''}
        </div>
    `;
}

async function submitBookingRequest(formData, category) {
    const emailData = {
        to: BOOKING_ADMIN_EMAIL,
        subject: formData.name ? `新的家政预约 - ${formData.name}` : '新的家政预约',
        html: formatBookingEmail(formData, category)
    };

    if (typeof trickleSendEmail === 'function') {
        await trickleSendEmail(emailData);
    } else {
        console.warn('[booking] trickleSendEmail 未定义，使用模拟方式发送。', emailData);
        await new Promise(resolve => setTimeout(resolve, 1200));
    }

    return true;
}

function useBookingFormState(initialCategory = 'tech') {
    const [activeTab, setActiveTab] = React.useState(initialCategory);
    const [formData, setFormData] = React.useState(() => createInitialFormState(initialCategory));
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState(null);

    const serviceOptions = React.useMemo(() => {
        return ServiceCatalog.getServiceOptions(activeTab) || [];
    }, [activeTab]);

    const isFormValid = React.useMemo(() => {
        return REQUIRED_BOOKING_FIELDS.every((field) => {
            const value = formData[field];
            return value !== undefined && String(value).trim().length > 0;
        });
    }, [formData]);

    const resetForm = React.useCallback((category = activeTab) => {
        setFormData(createInitialFormState(category));
    }, [activeTab]);

    const handleChange = React.useCallback((event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setSubmitStatus(null);
    }, []);

    const handleTabChange = React.useCallback((category) => {
        setActiveTab(category);
        setFormData(prev => ({
            ...prev,
            serviceType: ServiceCatalog.getDefaultServiceId(category) || ''
        }));
        setSubmitStatus(null);
    }, []);

    const handleSubmit = React.useCallback(async (event) => {
        event.preventDefault();

        if (!isFormValid) {
            setSubmitStatus('invalid');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await submitBookingRequest(formData, activeTab);
            setSubmitStatus('success');
            resetForm(activeTab);
        } catch (error) {
            console.error('Booking submission failed:', error);
            if (typeof reportError === 'function') {
                reportError(error);
            }
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }, [formData, activeTab, isFormValid, resetForm]);

    return {
        activeTab,
        formData,
        handleChange,
        handleTabChange,
        handleSubmit,
        isSubmitting,
        submitStatus,
        serviceOptions,
        isFormValid
    };
}

function BookingStatusAlert({ status, variant = 'panel' }) {
    try {
        if (!status) {
            return null;
        }

        const variants = {
            success: {
                icon: 'fas fa-check-circle',
                panel: 'text-green-400',
                page: 'bg-green-50 border border-green-200 text-green-700',
                message: '预约提交成功，我们将尽快与您联系确认细节。'
            },
            error: {
                icon: 'fas fa-exclamation-triangle',
                panel: 'text-red-400',
                page: 'bg-red-50 border border-red-200 text-red-700',
                message: '提交失败，请稍后重试或直接联系我们的客服。'
            },
            invalid: {
                icon: 'fas fa-info-circle',
                panel: 'text-yellow-300',
                page: 'bg-yellow-50 border border-yellow-200 text-yellow-700',
                message: '请完善必填信息后再提交预约。'
            }
        };

        const config = variants[status];
        if (!config) {
            return null;
        }

        if (variant === 'panel') {
            return (
                <p className={`text-sm flex items-center gap-2 ${config.panel}`}>
                    <i className={config.icon}></i>
                    <span>{config.message}</span>
                </p>
            );
        }

        return (
            <div className={`flex items-center gap-3 px-4 py-3 rounded-lg ${config.page}`}>
                <i className={config.icon}></i>
                <span className="text-sm leading-relaxed">{config.message}</span>
            </div>
        );
    } catch (error) {
        console.error('BookingStatusAlert component error:', error);
        if (typeof reportError === 'function') {
            reportError(error);
        }
        return null;
    }
}

function BookingFormFields({ formData, onChange, serviceOptions, isSubmitting, variant = 'panel' }) {
    try {
        const styles = variant === 'page'
            ? {
                label: 'text-gray-700',
                input: 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20',
                helper: 'text-gray-500'
            }
            : {
                label: 'text-gray-300',
                input: 'bg-gray-900/70 border border-gray-700 text-gray-100 placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30',
                helper: 'text-gray-400'
            };

        const today = new Date().toISOString().split('T')[0];

        return (
            <>
                <div>
                    <label className={`block text-sm font-medium mb-2 ${styles.label}`} htmlFor={`booking-name-${variant}`}>
                        联系人姓名
                    </label>
                    <input
                        id={`booking-name-${variant}`}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={onChange}
                        placeholder="请输入您的姓名"
                        className={`w-full px-4 py-3 rounded-lg transition-colors duration-150 ${styles.input}`}
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div>
                    <label className={`block text-sm font-medium mb-2 ${styles.label}`} htmlFor={`booking-phone-${variant}`}>
                        联系电话
                    </label>
                    <input
                        id={`booking-phone-${variant}`}
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={onChange}
                        placeholder="便于我们快速联系您"
                        className={`w-full px-4 py-3 rounded-lg transition-colors duration-150 ${styles.input}`}
                        inputMode="tel"
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div>
                    <label className={`block text-sm font-medium mb-2 ${styles.label}`} htmlFor={`booking-service-${variant}`}>
                        服务类型
                    </label>
                    <div className="relative">
                        <select
                            id={`booking-service-${variant}`}
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={onChange}
                            className={`w-full appearance-none px-4 py-3 rounded-lg transition-colors duration-150 pr-10 ${styles.input}`}
                            disabled={isSubmitting || serviceOptions.length === 0}
                            required
                        >
                            {serviceOptions.length === 0 && <option value="">暂无可选服务</option>}
                            {serviceOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                            <i className="fas fa-chevron-down"></i>
                        </span>
                    </div>
                </div>

                <div>
                    <label className={`block text-sm font-medium mb-2 ${styles.label}`} htmlFor={`booking-address-${variant}`}>
                        服务地址
                    </label>
                    <input
                        id={`booking-address-${variant}`}
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={onChange}
                        placeholder="请填写详细地址：小区 / 楼栋 / 门牌号"
                        className={`w-full px-4 py-3 rounded-lg transition-colors duration-150 ${styles.input}`}
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className={`block text-sm font-medium mb-2 ${styles.label}`} htmlFor={`booking-date-${variant}`}>
                            预约日期
                        </label>
                        <input
                            id={`booking-date-${variant}`}
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={onChange}
                            min={today}
                            className={`w-full px-4 py-3 rounded-lg transition-colors duration-150 ${styles.input}`}
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                    <div>
                        <label className={`block text-sm font-medium mb-2 ${styles.label}`} htmlFor={`booking-time-${variant}`}>
                            预约时间
                        </label>
                        <input
                            id={`booking-time-${variant}`}
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={onChange}
                            className={`w-full px-4 py-3 rounded-lg transition-colors duration-150 ${styles.input}`}
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                </div>

                <div>
                    <label className={`block text-sm font-medium mb-2 ${styles.label}`} htmlFor={`booking-notes-${variant}`}>
                        备注信息（选填）
                    </label>
                    <textarea
                        id={`booking-notes-${variant}`}
                        name="notes"
                        value={formData.notes}
                        onChange={onChange}
                        placeholder="例如：家中有宠物 / 需要自带清洁工具 / 其他特殊需求等"
                        rows="3"
                        className={`w-full px-4 py-3 rounded-lg transition-colors duration-150 resize-none ${styles.input}`}
                        disabled={isSubmitting}
                    ></textarea>
                    <p className={`text-xs mt-2 ${styles.helper}`}>
                        我们会严格保护您的隐私信息，仅用于提供预约服务。
                    </p>
                </div>
            </>
        );
    } catch (error) {
        console.error('BookingFormFields component error:', error);
        if (typeof reportError === 'function') {
            reportError(error);
        }
        return null;
    }
}

function BookingForm() {
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

        return (
            <div data-name="booking-form" className="space-y-6">
                <div className="flex justify-center">
                    <div className="inline-flex rounded-full bg-gray-100 p-1">
                        <button
                            type="button"
                            onClick={() => handleTabChange('tech')}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-150 ${activeTab === 'tech' ? 'bg-cyan-500 text-white shadow' : 'text-gray-600 hover:text-cyan-500'}`}
                        >
                            科技服务
                        </button>
                        <button
                            type="button"
                            onClick={() => handleTabChange('traditional')}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-150 ${activeTab === 'traditional' ? 'bg-cyan-500 text-white shadow' : 'text-gray-600 hover:text-cyan-500'}`}
                        >
                            传统服务
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <BookingFormFields
                        formData={formData}
                        onChange={handleChange}
                        serviceOptions={serviceOptions}
                        isSubmitting={isSubmitting}
                        variant="page"
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting || !isFormValid}
                        className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-shadow duration-150 shadow-lg shadow-cyan-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? '提交中...' : '确认预约'}
                    </button>

                    <BookingStatusAlert status={submitStatus} variant="page" />

                    <div className="text-center text-sm text-gray-500">
                        <p>如需快速响应，请拨打客服热线：
                            <a href={`tel:${BOOKING_ADMIN_PHONE}`} className="text-cyan-600 font-medium ml-1">
                                {BOOKING_ADMIN_PHONE}
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        );
    } catch (error) {
        console.error('BookingForm component error:', error);
        if (typeof reportError === 'function') {
            reportError(error);
        }
    }
}
