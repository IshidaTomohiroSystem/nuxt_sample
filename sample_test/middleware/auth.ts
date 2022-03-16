import { useAuth } from '@/composables/useAuth'

export default defineNuxtRouteMiddleware((to, from) => {
    // この middleware が設定されている場合は要ログイン
    const { currentUser } = useAuth()
    if (!currentUser.value && to.path !== '/login') {
        const path = '/login'
        //return { path }
        return navigateTo(path)
    }
    //return abortNavigation() // Aborts the navigation, with an optional error message.
    // return abortNavigation('ナビゲーションガード') 
})