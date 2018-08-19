// Copyright (c) 2016, the IFMLEdit.org project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by the MIT license that can be found in the LICENSE file.
/*jslint node: true, nomen: true */
"use strict";

var _ = require('lodash'),
    compact = require('./compact').compact,
    ifml = require('../ifml').ifml,
    ifml2server = require('./server').transform,
    ifml2client = require('./client'),
    ifml2mobile = require('./mobile'),
    ifml2flutter = require('./flutter'),
    ifml2code = { };

exports.ifml2code = ifml2code;

ifml2code.server = function (ifmlModel) {
    var transformed = ifml2server(ifml.extend(ifmlModel));
    return compact(transformed);
};

ifml2code.client = function (ifmlModel) {
    var transformed = ifml2client.transform(ifml2client.extender.extend(ifmlModel));
    return compact(transformed);
};

ifml2code.mobile = function (ifmlModel) {
    var transformed = ifml2mobile.transform(ifml2mobile.extender.extend(ifmlModel));
    return compact(transformed);
};

ifml2code.flutter = function (ifmlModel) {
    var transformed = ifml2mobile(ifml.extend(ifmlModel));
    return compact(transformed);
};
