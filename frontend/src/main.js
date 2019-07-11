'use strict'

import Vue from 'vue'
import VuePtero from 'vue-ptero'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'

import log from 'loglevel'

import 'normalize.css'
import './style.scss'

import { App } from '@/src/components'
import { LOCALE } from '@/src/initial_state'
import { messages } from '@/src/locales'
import setupRouter from '@/src/router'

// -------------------------------------------------------------------

if (DEBUG) {
  log.setLevel('trace')
} else {
  log.setLevel('warn')
}

Vue.use(VuePtero, { target: document.body })
Vue.use(VueRouter)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: LOCALE,
  messages,
})

// -------------------------------------------------------------------

export default new Vue({
  el: '.App',
  render: h => h(App),

  /**
   * vue-router
   */
  router: setupRouter(),

  /**
   * vue-i18n
   */
  i18n,
})

