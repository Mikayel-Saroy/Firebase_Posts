import Service from '@ember/service';
import {tracked} from "@glimmer/tracking";

const MAIL_EXTENSION = "@gmail.com";

export default class LocalService extends Service {
  @tracked defaultMailExtension = MAIL_EXTENSION;
  @tracked myEmail;

  @tracked currentEmail;
  @tracked currentID;
  @tracked currentTitle;
  @tracked currentBody;

  @tracked isMyPost = false;
}
