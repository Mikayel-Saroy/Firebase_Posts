import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class ItemItemComponent extends Component {
  @service local;
}
