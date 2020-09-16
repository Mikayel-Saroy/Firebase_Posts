import Model, { attr }from '@ember-data/model';

export default class PostModel extends Model {
  @attr userEmail;
  @attr title;
  @attr body;
}
