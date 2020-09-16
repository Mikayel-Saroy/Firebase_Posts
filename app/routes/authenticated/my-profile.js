import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";

export default class AuthenticatedMyProfileRoute extends Route {
  @service store;
  @service session;
  @service local;

  model() {
    const user = this.session.data.authenticated.user;
    this.local.myEmail = user.email;
    return this.store.query('post', {query: ref => ref.where('userEmail', '==', user.email)});
  }
}
