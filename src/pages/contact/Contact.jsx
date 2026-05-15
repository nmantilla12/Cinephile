import React from 'react';
import styles from './Contact.module.scss';
import Button from '../../components/button/Button';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado a la estación orbital");
    };

    return (
        <main className={styles.contactPage}>
            <div className={styles.container}>
                <section className={styles.infoSection}>
                    <p className={styles.overline}>ESTABLISH LINK</p>
                    <h1 className={styles.title}>STAY <br /> CONNECTED</h1>
                    <p className={styles.description}>
                        Experience precision-engineered streaming. Our specialized team is standing by to resolve technical queries and partnership requests with cinematic efficiency.
                    </p>
                </section>

                <section className={styles.formCard}>
                    <div className={styles.mobileHeader}>
                        <h1 className={styles.mobileTitle}>Contact Us</h1>
                        <p className={styles.mobileSubtitle}>Send a transmission to our orbital station.</p>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name">
                                    <span className={styles.desktopText}>IDENTITY</span>
                                    <span className={styles.mobileText}>IDENTIFIER</span>
                                </label>
                                <input type="text" id="name" name="name" placeholder="Full Name" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="email">E-MAIL</label>
                                <input type="email" id="email" name="email" placeholder="Email Address" required />
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="message">MESSAGE</label>
                            <textarea id="message" name="message" placeholder="Your message..." rows="5" required></textarea>
                        </div>

                        <div className={styles.formFooter}>
                            <div className={styles.secureBadge}>
                                <span className={styles.icon}>🛡️</span> END-TO-END SECURE
                            </div>
                            
                            <Button type="submit" variant="primary"> 
                                SEND 
                            </Button>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
}