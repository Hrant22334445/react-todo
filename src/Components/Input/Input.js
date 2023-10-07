import { BsFillCalendarDateFill } from 'react-icons/bs';
import styles from './input.module.css'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Input() {
    return (
            <Form className={styles.input}>
                <Form.Control type='text' placeholder='Add New...' className={styles.search} />
                <Button className={styles.button}><BsFillCalendarDateFill /></Button>
                <Button className={styles.button}>Add</Button>
            </Form>
    )
}