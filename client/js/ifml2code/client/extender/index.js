// Copyright (c) 2016, the IFMLEdit.org project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by the MIT license that can be found in the LICENSE file.
/*jslint node: true, nomen: true */
"use strict";

var _ = require('lodash'),
    config = require('../../../ifml').ifml.config,
    almost = require('almost'),
    custom_templates = require('./custom'),
    Rule = almost.Rule,
    createRule = almost.createRule,
    AException = almost.Exception,
    custom = require('./custom');

config.custom.hasCustomTemplate = function (element, defaultValue) {
    if (arguments.length < 2) { defaultValue = false; }
    var id = this.toId(element);
    return custom_templates[id] !== undefined;
};

config.custom.getCustomTemplate = function (element, defaultValue) {
    if (arguments.length < 2) { defaultValue = false; }
    var id = this.toId(element);
    return custom_templates[id];
};

config.custom.getCustomTemplateById = function (id, defaultValue) {
    if (arguments.length < 2) { defaultValue = false; }
    return custom_templates[id];
};

exports.extend = almost.createExtender(config);

exports.rules = [
    createRule(
        Rule.always,
        function (model) {
            var controls = _.chain(model.elements)
            .filter(function (e) { return model.isViewElement(e); })
            .value(),
        events = _.chain(model.elements)
            .filter(function (e) { return model.isEvent(e); })
            .filter(function (e) { return model.getOutbounds(e).length; })
            .value(),
        actions = _.chain(model.elements)
            .filter(function (e) { return model.isAction(e); })
            .filter(function (a) { return model.getInbounds(a).length; })
            .value(),
        children = model.getTopLevels(),
        defaultChild = _.chain(children)
            .filter(function (id) { return model.isDefault(id); })
            .first()
            .value(),
        landmarks = _.chain(children)
            .filter(function (e) { return model.isLandmark(e); })
            .map(function (id) { return model.toElement(id); })
            .map(function (e) { return {id: e.id, name: e.attributes.name}; })
            .value(),
        collections = _.chain(model.elements)
            .filter(function (e) { return model.isViewComponent(e); })
            .reject({attributes: {stereotype: 'form'}})
            .map(function (c) {
                if (c.attributes.collection) {
                    return c.attributes.collection;
                }
                throw new AException('Collection cannot be empty\n(ViewComponent id:' + c.id + ')');
            })
            .uniq()
            .value();
        
            return {
                'js': {children: ['mediaplayer'] },
                'mediaplayer': { name: 'mediaplayer.js', content: custom.mediaplayer.js() },
                
            };

        })
]
