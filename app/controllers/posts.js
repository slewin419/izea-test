import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    queryParams: ['page', 'size'],
    size: 8,
    page: 1,
    next: computed('model.nextPage', function(){
        return this.page + 1;
    }),
    previous: computed('model.previousPage', function(){
       return this.page - 1;
    }),
    hasNext: computed('model.hasNext', function(){
        return this.model.length === this.size;
    }),
    posts: Ember.inject.service(),
    actions: {
        getPostDetails(postId){
            var _self = this;
            this.get('posts').request('/posts/' + postId)
                .then(function(post){
                    _self.set('currentPost', post);
                    return post.userId;
                })
                .then(function(userId){
                    _self.get('posts').request('/users/' + userId)
                        .then(user => _self.set('currentUser', user));
                });
        },
        deleteCurrentUser() {
            this.set('currentPost', null);
        }
    }
});
