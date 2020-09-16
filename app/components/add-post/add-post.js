import Component from '@glimmer/component';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';
import {inject as service} from '@ember/service';

const BOX_DEFAULT_COLOR = "#005a9e";
const BOX_ERROR_COLOR = "#C62828";
const TITLE_PLACEHOLDER_DEFAULT_MESSAGE = "Enter the title";
const BODY_PLACEHOLDER_DEFAULT_MESSAGE = "Enter the body";
const PLACEHOLDER_ERROR_MESSAGE = "Enter a valid data";
const SUBMIT_BUTTON_TEXT = "Submit";
const LOADING_BUTTON_TEXT = "Loading...";
const SUCCEED_MESSAGE = "Your post has been submitted";

export default class PostFormComponent extends Component {
  @service store;
  @service session;
  @service firebaseApp;

  @tracked title = "";
  @tracked body = "";
  @tracked buttonText = SUBMIT_BUTTON_TEXT;
  @tracked successMessage = "";
  @tracked titleBoxColor = BOX_DEFAULT_COLOR;
  @tracked bodyBoxColor = BOX_DEFAULT_COLOR;
  @tracked titlePlaceholderMessage = TITLE_PLACEHOLDER_DEFAULT_MESSAGE;
  @tracked bodyPlaceholderMessage = BODY_PLACEHOLDER_DEFAULT_MESSAGE;

  @action
  trimEmptyBoxes(title, body) {
    if (title) {
      this.local.currentTitle = '';
    }
    if (body) {
      this.local.currentBody = '';
    }
  }

  @action
  async submitThePost() {
    if (this.title.trim() === "" && this.body.trim() === "") {
      this.titleBoxColor = BOX_ERROR_COLOR;
      this.bodyBoxColor = BOX_ERROR_COLOR;
      this.titlePlaceholderMessage = PLACEHOLDER_ERROR_MESSAGE;
      this.bodyPlaceholderMessage = PLACEHOLDER_ERROR_MESSAGE;
      this.trimEmptyBoxes(true, true);
    } else if (this.title.trim() === "" && this.body.trim() !== "") {
      this.titleBoxColor = BOX_ERROR_COLOR;
      this.bodyBoxColor = BOX_DEFAULT_COLOR;
      this.titlePlaceholderMessage = PLACEHOLDER_ERROR_MESSAGE;
      this.bodyPlaceholderMessage = BODY_PLACEHOLDER_DEFAULT_MESSAGE;
      this.trimEmptyBoxes(true, false);
    } else if (this.title.trim() !== "" && this.body.trim() === "") {
      this.titleBoxColor = BOX_DEFAULT_COLOR;
      this.bodyBoxColor = BOX_ERROR_COLOR;
      this.titlePlaceholderMessage = TITLE_PLACEHOLDER_DEFAULT_MESSAGE;
      this.bodyPlaceholderMessage = PLACEHOLDER_ERROR_MESSAGE;
      this.trimEmptyBoxes(false, true);
    } else {
      this.buttonText = LOADING_BUTTON_TEXT;
      this.titleBoxColor = BOX_DEFAULT_COLOR;
      this.bodyBoxColor = BOX_DEFAULT_COLOR;
      this.titlePlaceholderMessage = TITLE_PLACEHOLDER_DEFAULT_MESSAGE;
      this.bodyPlaceholderMessage = BODY_PLACEHOLDER_DEFAULT_MESSAGE;
      const user = this.session.data.authenticated.user;
      const {title, body} = this;
      const post = this.store.createRecord('post', {
        title,
        body,
        userEmail: user.email,
      });
      await post.save();
      this.title = "";
      this.body = "";
      this.buttonText = SUBMIT_BUTTON_TEXT;
      this.successMessage = SUCCEED_MESSAGE;
      setTimeout(() => {
        this.successMessage = "";
      }, 3000);
    }
  }
}
