import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';
import { tracked } from '@glimmer/tracking';

const HIDE_TYPE = "password";
const SHOW_TYPE = "text";
const HIDE_PASS = "hide";
const SHOW_PASS = "show";

export default class SignUpComponent extends Component {
  @service session;
  @service firebaseApp;
  @service router;
  @service local;

  @tracked email;
  @tracked password;
  @tracked passwordType = HIDE_TYPE;
  @tracked passwordTypeButtonName = SHOW_PASS;

  @action
  changePasswordType() {
    if (this.passwordType === HIDE_TYPE) {
      this.passwordType = SHOW_TYPE;
      this.passwordTypeButtonName = HIDE_PASS;
    } else {
      this.passwordType = HIDE_TYPE;
      this.passwordTypeButtonName = SHOW_PASS;
    }
  }

  @action
  async submitData() {
    const auth = await this.firebaseApp.auth();
    try {
      await auth.createUserWithEmailAndPassword(this.email + this.local.defaultMailExtension, this.password);
      this.email = "";
      this.password = "";
      this.router.transitionTo('authenticated.my-profile');
    } catch (error) {
      console.log(error);
    }
  }
}
