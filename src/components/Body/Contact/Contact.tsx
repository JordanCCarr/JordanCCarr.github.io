import React from 'react';
import './Contact.css';

interface ContactProps {
    displayEngText: boolean;
}

const Contact = ({displayEngText}: ContactProps) => {
    return (
        <div className="contact-banner">
            {displayEngText ? 'Interested in hiring me? Here\'s my contact information' : '私を雇う興味がありますか。連絡インフォメーションは'}
            <div className="contact-info">
                {displayEngText ? 'Phone Number' : '電話番号'}: 412-848-0447
            </div>
            <div className="contact-info">
                {displayEngText ? 'Email' : 'メール'}: jcarr1624@gmail.com
            </div>
        </div>
    );
};

export default Contact;