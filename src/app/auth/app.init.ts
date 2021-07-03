import {  KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'Posh-Pet-Clinic',
        clientId: 'poshpetclinic-web',
      },
      initOptions: {
        checkLoginIframe: true,
        checkLoginIframeInterval: 600,
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
        'http://localhost:4200',
          // window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}