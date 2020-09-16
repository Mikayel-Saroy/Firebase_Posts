import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PostComponent extends Component {
  @service local;

  @action getCurrentData() {
    this.local.currentEmail = this.args.post.title;
    this.local.currentID = this.args.post.id;
    this.local.currentTitle = this.args.post.title;
    this.local.currentBody = this.args.post.body;
    // console.log(this.local.currentEmail);
    // console.log(this.local.currentID);
    // console.log(this.local.currentTitle);
    // console.log(this.local.currentBody);
  }
}
