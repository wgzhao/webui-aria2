export function isFeatureEnabled(feature) {
  return miscellaneous.enabledFeatures.indexOf(feature) != -1;
}

export function getAria2Version() {
  return miscellaneous.version;
}
export function addUris(uris, settings, cb) {
  _.each(uris, function (uri) {
    var uri_parsed = [];
    // parse options passed in the URIs. E.g. http://ex1.com/f1.jpg --out=image.jpg --check-integrity
    var uriSettings = _.cloneDeep(settings);
    _.each(uri, function (uri_element) {
      if (uri_element.startsWith("--")) {
        var uri_options = uri_element.split(/--|=(.*)/);
        if (uri_options.length > 2) {
          uriSettings[uri_options[2]] = uri_options[3] || "true";
        }
      } else {
        uri_parsed.push(uri_element);
      }
    });
    // passing true to batch all the addUri calls
    rpc.once("addUri", [uri_parsed, uriSettings], cb, true);
  });

  // now dispatch all addUri syscalls
  rpc.forceUpdate();
}

export function addTorrents(txts, settings, cb) {
  _.each(txts, function (txt) {
    // passing true to batch all the addUri calls
    rpc.once("addTorrent", [txt, [], settings], cb, true);
  });

  // now dispatch all addUri syscalls
  rpc.forceUpdate();
}
export function addMetalinks(txts, settings, cb) {
  _.each(txts, function (txt) {
    // passing true to batch all the addUri calls
    rpc.once("addMetalink", [txt, settings], cb, true);
  });

  // now dispatch all addUri syscalls
  rpc.forceUpdate();
}
