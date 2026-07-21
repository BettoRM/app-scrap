import { Service } from '@angular/core';

@Service()
export class AuthService {
    isLoggedIn(): boolean {
        return sessionStorage.getItem('loggedIn') === 'true';
    }

    setLoggedIn(userName:string): void {
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('lastActivity', Date.now().toString(),);
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('usrName', userName);
    }

    clearSession(): void {
        sessionStorage.removeItem('loggedIn');
        sessionStorage.removeItem('lastActivity');
    }
}
