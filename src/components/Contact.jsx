import { Screen } from './Screen.jsx'

export const Contact = () => {
  return (
    <Screen title= "Contacto">
        <ul className="contacto-list">
            <li>
                <a className="contacto-link" href="mailto:ana@correo.com">
                    correo: erozog123@gmail.com
                </a>
            </li>
            <li>
                <a className="contacto-link" href="https://github.com/">
                    GitHub: erozog125
                </a>
            </li>
            </ul>
    </Screen>
  )
}
