import Service from '@ember/service';
import {tracked} from "@glimmer/tracking";

export default class LocalService extends Service {
  @tracked myEmail;

  @tracked currentEmail;
  @tracked currentID;
  @tracked currentTitle;
  @tracked currentBody;
}
