import Route from '@ember/routing/route';
import {inject as service } from '@ember/service';

export default Route.extend({
    posts: service(),
    queryParams: {
        page: {
            refreshModel: true
        },
        size: {
            refreshModel: true
        }
    },
    model(params) {
        return this.get('posts').request('/posts', {
            data: {
                _start: params.size * (--params.page),
                _limit: params.size
            }
        });
    }
});
