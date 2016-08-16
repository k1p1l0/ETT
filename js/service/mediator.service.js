angular.module('empeekApp').service('Mediator', function Mediator() {
  var channels = {}; // Associative object.

  this.publish = function (channel, data) {
    if (! channels[channel]) {
      return;
    }

    var subscribers = channels[channel].slice();

    angular.forEach(subscribers, function (subscriber) {
      subscriber.callback(data);
    });
  };

  this.subscribe = function (channel, id, cb) {
    if (! channels[channel]) {
      channels[channel] = [];
    }

    return channels[channel].push({
      'callback': cb,
      'id': id
    });
  };

  this.unsubscribe = function (channel, id) {
    if (! channels[channel]) {
      return false;
    }
    for (var i = 0, len = channels[channel].length; i < len; i++) { 
      if (channels[channel][i].id === id) { 
        var removed = channels[channel].splice(i, 1); 
        return (removed.length > 0);
      }
    }
    return false;
  };

});