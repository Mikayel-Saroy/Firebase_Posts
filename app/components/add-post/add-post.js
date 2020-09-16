import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class PostFormComponent extends Component {
  @service store;
  @service session;
  @service firebaseApp;

  @tracked title;
  @tracked body;

  @action
  async submitThePost() {
    const user = this.session.data.authenticated.user;

    const { title, body } = this;
    const post = this.store.createRecord('post', {
      title,
      body,
      userEmail: user.email,
    });
    await post.save();
    this.title = "";
    this.body = "";
  }
}
