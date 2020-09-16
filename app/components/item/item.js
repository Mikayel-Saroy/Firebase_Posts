import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
import {action} from '@ember/object';
import {tracked} from "@glimmer/tracking";

const DELETE_BUTTON_TEXT = "Delete";
const LOADING_BUTTON_TEXT = "Loading...";
const DELETE_SUCCEED_MESSAGE = "Your post has been successfully deleted."

export default class ItemItemComponent extends Component {
  @service local;
  @service store;
  @service router;

  @tracked postItems = {
    userEmail: this.local.currentEmail,
    title: this.local.currentTitle,
    body: this.local.currentBody,
  }
  @tracked deleteButtonText = DELETE_BUTTON_TEXT;
  @tracked deleteSucceedMessage = "";

  @action
  async deleteThePost() {
    this.deleteButtonText = LOADING_BUTTON_TEXT;
    const post = await this.store.findRecord('post', this.local.currentID);
    post.destroyRecord();
    setTimeout(() => {
      this.deleteButtonText = DELETE_BUTTON_TEXT;
      this.deleteSucceedMessage = DELETE_SUCCEED_MESSAGE;
    },1500);
    setTimeout(() => {
      this.router.transitionTo("authenticated.my-profile");
    }, 3000);
  }

  @action funcA() {
    // console.log(this.local.currentEmail);
    // console.log(this.local.currentID);
    // console.log(this.local.currentTitle);
    // console.log(this.local.currentBody);
  }
}
