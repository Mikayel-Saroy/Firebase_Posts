import Component from '@glimmer/component';
import { action } from '@ember/object';
import firebase from 'firebase/app';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class SignInComponent extends Component {
  @service session;
  @service firebaseApp;
  @service router;
  @service local;

  @tracked email;
  @tracked password;

  @action
  async signIn() {
    const auth = await this.firebaseApp.auth();
    try {
      await auth.signInWithEmailAndPassword(this.email + this.local.defaultMailExtension, this.password);
      this.local.myEmail = this.email;
      this.email = "";
      this.password = "";
      this.router.transitionTo('authenticated.my-profile');
    } catch (error) {
      console.log(error);
    }
  }
}
