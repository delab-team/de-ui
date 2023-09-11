import s from './input.module.css'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, ...rest }) => (
    <div className={s.inputWrapper}>
        {label && <label className={s.label}>{label}</label>}
        <input className={s.input} {...rest} />
        {error && <div className={s.error}>{error}</div>}
    </div>
)
