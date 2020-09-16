import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
import {action} from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class ItemItemComponent extends Component {
  @service local;

  @tracked postItems = {
    userEmail: this.local.currentEmail,
    title: this.local.currentTitle,
    body: this.local.currentBody,
  }

  @action funcA() {
    console.log(this.local.currentEmail);
    console.log(this.local.currentID);
    console.log(this.local.currentTitle);
    console.log(this.local.currentBody);
  }
}
