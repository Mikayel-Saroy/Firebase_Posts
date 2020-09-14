import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class PostFormComponent extends Component {
  @service store;
  @service session;
  @tracked title;
  @tracked body;
  @service firebaseApp;

  @action
  async onSubmit() {
    const user = this.session.data.authenticated.user;

    const { title, body } = this;
    const post = this.store.createRecord('post', {
      title,
      body,
      userEmail: user.email
    });

    await post.save();
  }
}
