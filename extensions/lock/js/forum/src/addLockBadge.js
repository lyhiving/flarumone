import { extend } from 'flarum/extend';
import Discussion from 'flarum/models/Discussion';
import Badge from 'flarum/components/Badge';

export default function addLockBadge() {
  extend(Discussion.prototype, 'badges', function(badges) {
    if (this.isLocked()) {
      badges.add('locked', Badge.component({
        type: 'locked',
        label: app.trans('lock.locked'),
        icon: 'lock'
      }));
    }
  });
}
