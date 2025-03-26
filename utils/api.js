/**
 * 使用trickle内置功能发送邮件
 * @param {Object} emailData - 邮件数据
 * @param {string} emailData.to - 收件人邮箱
 * @param {string} emailData.subject - 邮件主题
 * @param {string} emailData.html - 邮件HTML内容
 */
function trickleSendEmail(emailData) {
    return new Promise((resolve, reject) => {
        // 这是trickle平台的内部实现
        // 实际环境中会自动处理邮件发送
        console.log('模拟发送邮件:', emailData);
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });
}
