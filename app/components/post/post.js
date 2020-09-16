import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PostComponent extends Component {
  @service local;

  @action getCurrentData() {
    this.local.currentEmail = this.args.post.userEmail;
    this.local.currentID = this.args.post.id;
    this.local.currentTitle = this.args.post.title;
    this.local.currentBody = this.args.post.body;
    this.local.isMyPost = this.local.myEmail === this.local.currentEmail;
    console.log(this.local.currentEmail);
    console.log(this.local.currentID);
    console.log(this.local.currentTitle);
    console.log(this.local.currentBody);
    console.log(`MY EMAIL: ${this.local.myEmail}`);
    console.log(`IS MY POST: ${this.local.isMyPost}`);
  }
}
