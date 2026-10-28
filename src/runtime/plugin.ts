import { defineNuxtPlugin } from 'nuxt/app'
import { defineDesktopApp } from 'nuxt-desktop/kit/defineDesktopApp'
import configAppTodo from './app.config'
import './stores/storeTodo'

export default defineNuxtPlugin({
  name: 'desktop-app-todo-register',
  async setup() {
    if (import.meta.server) return
    await defineDesktopApp(configAppTodo)
  },
})
