import styles from '@/components/navigation/Navigation.module.css'

export default function Breadcrumb({ title }) {
    return (
        <div>
            <div className={`container-fluid px-md-5 ${styles.breadcrumb}`}>
                <div className="row ">
                    <div className="col-12 white">
                        <b className="display-5 border-bottom ">{title}</b>
                    </div>
                </div>
            </div>
        </div>
    )
}
