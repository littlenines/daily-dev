import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'

import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

library.add(faBars,
            faCode,
            faPlus,
            faEllipsisVertical,
            faAnglesUp,
            faMessage,
            faBookmark,
            faGear)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router)
.mount('#app')
