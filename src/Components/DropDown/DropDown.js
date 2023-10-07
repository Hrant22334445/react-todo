import { Dropdown, DropdownButton } from "react-bootstrap"
import styles from './drop-down.module.css'

export default function DropDown() {
    return (
        <div className={styles.dropDown}>
        <Dropdown className={styles.margins} data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="outline-secondary">
          All
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" active>
            All
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Checked</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Unchecked</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="outline-secondary"
        title="Added Date"
        data-bs-theme="dark"
      >
        <Dropdown.Item href="#/action-1" active>
          All
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Today</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Earlier</Dropdown.Item>
      </DropdownButton>
        </div>
        
    )
}