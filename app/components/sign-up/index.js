import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';
import { tracked } from '@glimmer/tracking';

export default class SignUpComponent extends Component {
  @service session;
  @service firebaseApp;

  @tracked email;
  @tracked password;


  @action
  async onSubmit() {
    const auth = await this.firebaseApp.auth();
    try {
      await auth.createUserWithEmailAndPassword(this.email, this.password);
    } catch (error) {
      console.log(error);
    }
  }
}
