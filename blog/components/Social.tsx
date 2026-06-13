import styles from '@/styles/social.module.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default function Social({iconSize = 'initial'}: {iconSize?: string}) {
  return(
    <ul className={styles.list} style={{'--icon-size': iconSize} as React.CSSProperties}>
      <li>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter}/>
        </a>
      </li>
      <li>
        <a href="https://facebook.com/">
          <FontAwesomeIcon icon={faFacebookF}/>
        </a>
      </li>
      <li>
        <a href="https://github.com/">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
      </li>
    </ul>
  )
}