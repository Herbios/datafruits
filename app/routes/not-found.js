import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route'

@classic
export default class NotFoundRoute extends Route {
  redirect() {
      this.transitionTo('/not-found');
  }
}
