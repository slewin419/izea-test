import Route from '@ember/routing/route';
import {inject as service } from '@ember/service';

export default Route.extend({
    posts: Ember.inject.service(),
    model(params) {
        //debugger;
        return this.get('posts').request('/posts', {
            data: {
                _start: params.size * (--params.page),
                _limit: params.size * (++params.page)
            }
        });
    }
});
