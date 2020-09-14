import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthenticatedPostsRoute extends Route {
  @service store;
  @service session;

  model() {
    const user = this.session.data.authenticated.user;
    return this.store.query('post', { query: ref => ref.where('userEmail', '==', user.email) });
  }
}
