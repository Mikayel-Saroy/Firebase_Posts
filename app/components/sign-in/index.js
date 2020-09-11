import Component from '@glimmer/component';
import { action } from '@ember/object';
import firebase from 'firebase/app';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SignInComponent extends Component {
  @service session;
  @service firebaseApp;

  @tracked email;
  @tracked password;

  @action
  async onSubmit() {
    const auth = await this.firebaseApp.auth();
    try {
      await auth.signInWithEmailAndPassword(this.email, this.password);
      console.log('success');
    } catch (error) {
      console.log(error);
    }
  }
}
