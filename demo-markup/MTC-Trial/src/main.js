import './assets/styles/main.scss'

import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import retinaImagePlugin from './plugins/retinaImage'
import App from './App.vue'
import 'animate.css'

library.add(faFacebook, faTwitter, faInstagram, faShoppingCart)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(retinaImagePlugin)

app.mount('#app')
