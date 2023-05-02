import styles from '@/components/home/Home.module.css'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="position-relative">
            <div className={styles.hero} />

            <div className={`text-center ${styles.hero_header}`}>
                <h1>APEXIA</h1>
                <p className="white">
                    We take pride in helping people from all walks of life achieve the justice and peace they deserve.
                </p>
                <Link href="/contact" className="btn btn-lg mt-4 border_none btn_secondary">
                    Learn More
                </Link>
            </div>
        </div>
    )
}
