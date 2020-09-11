import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NavbarComponent extends Component {
    @tracked collapsed = true;
    @service session;

    @action
    logout() {
      this.session.invalidate();
    }
}
