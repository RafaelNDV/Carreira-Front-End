import './save-button.styles.css'

export function SaveButton({children, ...props}){
    return <button className='save-button' {...props}>{children}</button>
}