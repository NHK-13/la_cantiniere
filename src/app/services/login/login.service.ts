import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
//import { HeaderService } from '../header/header.service';

/**
 * Ce service gère :
 * le login de l'utilisateur
 * la gestion de la variable loggedIn
 * qui représente la connexion utilisateur (pour auth guard)
 */


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  data: any;
  user: any;

  /**
   * on crée une variable loggedIn qui va vérifier que l'utilisateur est
   * connecté
   */
  // private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());


  // get isLoggedIn() {
  //   return this.loggedIn.asObservable();
  // }

  /**
 * cette fonction permet de garder loogedIn à true
 * tant que le jwt est en mémoire
 */
  // private tokenAvailable(): boolean {
  //   return !!localStorage.getItem('jwt');
    
  // }

  /**
 *
 * @param user
 * méthode login utilisateur
 */
  login(user: any): Observable<any> {

    const url = 'http://localhost:8080/lunchtime/login';
    console.log('hello');
    console.log(url, ' + ', user);
    return this.http.post<any>(url, user, { responseType: 'json' })

      .pipe(

        map((data) => {
          console.log(data);

          if (data) {
            console.log(data);
            /**
             * si on reçoit une réponse du serveur on enregistre le jwt et
             * on passe loggedIn à true
             */
            localStorage.setItem('jwt', data.token);
            console.log(data);
            //this.loggedIn.next(true);
            console.log('yo');

          }
        }),

        catchError(this.handleLoginError),
      );


  }

  loggedIn() {
    return !!localStorage.getItem('jwt')
  }

  getToken() {
    return localStorage.getItem('jwt')
  }



  /**
   * Deconnexion
   */
  logout() {
    //this.loggedIn.next(false);
    localStorage.removeItem('jwt');
    this.router.navigate(['/home']);
  }

  /**
 * Traitement des erreurs HTTP
 */

  /**
   *
   * @param error
   * traitement des erreurs login
   */
  handleLoginError(error) {

    let errorMessage = '';
    errorMessage = error.error.message;
    console.log(errorMessage);
    return throwError(errorMessage);

  }

}

