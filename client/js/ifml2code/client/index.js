// Copyright (c) 2016, the IFMLEdit.org project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by the MIT license that can be found in the LICENSE file.
/*jslint node: true, nomen: true */
"use strict";

var _ = require('lodash'),
    modelRules = require('./modelrules').rules,
    elementRules = require('./elementrules').rules,
    createTransformer = require('almost').createTransformer,
    extender = require('./extender');

exports.transform = createTransformer({
    model: _([])
            .concat(modelRules)
            .concat(extender.rules)
            .value(),
    element: elementRules
}, 'm2t');

exports.extender = extender;
