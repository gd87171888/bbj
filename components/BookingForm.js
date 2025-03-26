function BookingForm() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            phone: '',
            serviceType: '1',
            address: '',
            date: '',
            time: '',
            notes: ''
        });
        const [isSubmitting, setIsSubmitting] = React.useState(false);
        const [submitStatus, setSubmitStatus] = React.useState(null);
        const [showConfirmDialog, setShowConfirmDialog] = React.useState(false);

        const serviceTypes = {
            '1': '日常清洁',
            '2': '深度清洁',
            '3': '家电清洁',
            '4': '家电维修'
        };

        const ADMIN_EMAIL = '84922982@qq.com';
        const ADMIN_PHONE = '13377797128'; // 更新为新的客服号码

        // 其余代码保持不变...
    } catch (error) {
        console.error('BookingForm component error:', error);
        reportError(error);
    }
}
