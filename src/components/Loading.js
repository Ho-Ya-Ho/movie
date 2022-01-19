import styles from "./Loading.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

function Loading() {
    return (
        <div className={styles.loader}>
            <FontAwesomeIcon icon={faSpinner} size="2x" spin/>
            <h1>Loading...</h1>
        </div>
    )
}

export default Loading;