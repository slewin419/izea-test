import Route from '@ember/routing/route';
import {inject as service } from '@ember/service';

export default Route.extend({
    posts: Ember.inject.service(),
    model() {
        return this.get('posts').request('/posts', {
            data: {
                _start: 0,
                _limit: 10
            }
        });
    }
});
