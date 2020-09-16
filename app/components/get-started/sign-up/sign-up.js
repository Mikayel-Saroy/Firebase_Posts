import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';
import { tracked } from '@glimmer/tracking';

const MAIL_EXTENSION = "@gmail.com"

export default class SignUpComponent extends Component {
  @service session;
  @service firebaseApp;
  @service router;

  @tracked email;
  @tracked password;


  @action
  async submitData() {
    const auth = await this.firebaseApp.auth();
    console.log(this.email);
    console.log(this.email + MAIL_EXTENSION);
    console.log(this.password);
    try {
      await auth.createUserWithEmailAndPassword(this.email + MAIL_EXTENSION, this.password);
      this.email = "";
      this.password = "";
      this.router.transitionTo('authenticated.my-profile');
    } catch (error) {
      console.log(error);
    }
  }
}
