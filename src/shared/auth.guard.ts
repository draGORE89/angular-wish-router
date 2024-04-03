import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { AuthService } from "./services/auth.service"


// Guard is now functional, because CanActivate is deprecated
export const authGuard = () => {
    const authService = inject(AuthService)
    const router = inject(Router)
    // return currentUserService$.currentUser$.pipe(
    //     filter(currentUser => currentUser !== undefined),
    //     map(currentUser => {
    //         if (!currentUser) {
    //             router.navigateByUrl('/')
    //             return false
    //         }
    //         return true
    //     })
    // )

    if (!authService.currentUserSig()) {
        router.navigateByUrl('/')
        return false
    }
    return true
}