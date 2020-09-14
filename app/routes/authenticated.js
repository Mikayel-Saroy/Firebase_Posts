import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthenticatedRoute extends Route {
  @service session;

  beforeModel(transition) {
    console.log()
    if (!this.session.isAuthenticated) {
      this.transitionTo('sign-in')
    }
  }
}
