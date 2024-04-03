import CompanyInfo from './CompanyInfo';
import NewsletterSignup from './NewsletterSignup';

export default function Footer() {
    return(
        <footer className='bg-bridal-heath'>
            <div className='mx-auto max-w-screen-2xl grid px-3 py-20 sm:px-6 sm:py-12 lg:px-24 lg:py-20 gap-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                    <CompanyInfo></CompanyInfo>
                    <NewsletterSignup></NewsletterSignup>
                </div>
            </div>
        </footer>
    );
}