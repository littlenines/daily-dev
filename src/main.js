import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faPlug } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'

import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import { faCirclePause } from '@fortawesome/free-regular-svg-icons'

library.add(faEye,
            faBars,
            faCode,
            faPlus,
            faGear,
            faLink,
            faUser,
            faPlug,
            faMessage,
            faBookmark,
            faTerminal,
            faAnglesUp,
            faChevronUp,
            faFileLines,
            faFloppyDisk,
            faSquarePlus,
            faCommentDots,
            faCirclePause,
            faUserAstronaut,
            faFireFlameCurved,
            faEllipsisVertical)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router)
.mount('#app')
