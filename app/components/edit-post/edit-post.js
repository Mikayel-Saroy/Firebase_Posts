import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

const BOX_DEFAULT_COLOR = "#005a9e";
const BOX_ERROR_COLOR = "#C62828";
const TITLE_PLACEHOLDER_DEFAULT_MESSAGE = "Enter the title";
const BODY_PLACEHOLDER_DEFAULT_MESSAGE = "Enter the body";
const PLACEHOLDER_ERROR_MESSAGE = "Enter a valid data";

export default class EditPostEditPostComponent extends Component {
  @service store;
  @service session;
  @service firebaseApp;
  @service local;

  @tracked buttonText = "Edit";
  @tracked successMessage = "";
  @tracked titleBoxColor = BOX_DEFAULT_COLOR;
  @tracked bodyBoxColor = BOX_DEFAULT_COLOR;
  @tracked titlePlaceholderMessage = TITLE_PLACEHOLDER_DEFAULT_MESSAGE;
  @tracked bodyPlaceholderMessage = BODY_PLACEHOLDER_DEFAULT_MESSAGE;

  @action
  async editThePost() {
    if (this.local.currentTitle.trim() === "" && this.local.currentBody.trim() === "") {
      this.titleBoxColor = BOX_ERROR_COLOR;
      this.bodyBoxColor = BOX_ERROR_COLOR;
      this.titlePlaceholderMessage = PLACEHOLDER_ERROR_MESSAGE;
      this.bodyPlaceholderMessage = PLACEHOLDER_ERROR_MESSAGE;
    } else if (this.local.currentTitle.trim() === "" && this.local.currentBody.trim() !== "") {
      this.titleBoxColor = BOX_ERROR_COLOR;
      this.bodyBoxColor = BOX_DEFAULT_COLOR;
      this.titlePlaceholderMessage = PLACEHOLDER_ERROR_MESSAGE;
      this.bodyPlaceholderMessage = BODY_PLACEHOLDER_DEFAULT_MESSAGE;
    } else if (this.local.currentTitle.trim() !== "" && this.local.currentBody.trim() === "") {
      this.titleBoxColor = BOX_DEFAULT_COLOR;
      this.bodyBoxColor = BOX_ERROR_COLOR;
      this.titlePlaceholderMessage = TITLE_PLACEHOLDER_DEFAULT_MESSAGE;
      this.bodyPlaceholderMessage = PLACEHOLDER_ERROR_MESSAGE;
    } else {
      this.buttonText = "Loading...";
      this.titleBoxColor = BOX_DEFAULT_COLOR;
      this.bodyBoxColor = BOX_DEFAULT_COLOR;
      this.titlePlaceholderMessage = TITLE_PLACEHOLDER_DEFAULT_MESSAGE;
      this.bodyPlaceholderMessage = BODY_PLACEHOLDER_DEFAULT_MESSAGE;

      // const user = this.session.data.authenticated.user;
      // const {title, body} = this;
      const post = await this.store.findRecord('post', this.local.currentID);
      post.title = this.local.currentTitle;
      post.body = this.local.currentBody;
      post.save();

      this.buttonText = "Edit";
      this.successMessage = "Your post has been submitted";
      setTimeout(() => {
        this.successMessage = "";
      }, 3000);
    }
  }
}
