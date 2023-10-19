import clsx from 'clsx'
import styles from './styles.module.sass'

function Button({ children, variant = "ghost", className, ...props }) {
    return (
        <button {...props} className={clsx(styles["button"], styles[variant], className)}>
            {children}
        </button>
    )
}

export { Button }