import DropDown from '../DropDown'
import Header from '../Header'
import Input from '../Input'
import styles from './app.module.css'

export default function App() {
    return (
        <div className={styles.app}>
            <Header />
             <Input />
            <DropDown />
        </div>
    )
}