const Notification = require('./notification')
const pushType = require('./constants/push-type')
const priority = require('./constants/priority')

/**
 * @class SilentNotification
 */
class SilentNotification extends Notification {

  /**
   * @constructor
   * @param {String} deviceToken
   * @param {Object} [options] - see super class
   */
  constructor(deviceToken, options) {
    options = options || {}

    let notificationPushType = pushType.background
    let notificationPriority = priority.throttled
    if (options.topic.endsWith(".voip")) {
        notificationPushType = pushType.voip
        notificationPriority = priority.immediate
    }

    super(deviceToken, {
      contentAvailable: true,
      pushType: notificationPushType,
      priority: notificationPriority,
      badge: options.badge,
      topic: options.topic,
      expiration: options.expiration,
      data: options.data
    })
  }
}

module.exports = SilentNotification
