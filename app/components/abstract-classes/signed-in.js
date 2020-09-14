import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SignedIn extends Route {
  @service session;

  beforeModel() {
    if (this.session.isAuthenticated) {
      this.transitionTo('authenticated.my-profile')
    }
  }
}
