import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'

import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faCirclePause } from '@fortawesome/free-regular-svg-icons'

library.add(faEye,
            faBars,
            faCode,
            faPlus,
            faGear,
            faLink,
            faMessage,
            faBookmark,
            faAnglesUp,
            faCirclePause,
            faFireFlameCurved,
            faEllipsisVertical)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router)
.mount('#app')
