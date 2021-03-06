"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.24
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1JobSpecToJSON = exports.V1JobSpecFromJSONTyped = exports.V1JobSpecFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1JobSpecFromJSON(json) {
    return V1JobSpecFromJSONTyped(json, false);
}
exports.V1JobSpecFromJSON = V1JobSpecFromJSON;
function V1JobSpecFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'activeDeadlineSeconds': !runtime_1.exists(json, 'activeDeadlineSeconds') ? undefined : json['activeDeadlineSeconds'],
        'backoffLimit': !runtime_1.exists(json, 'backoffLimit') ? undefined : json['backoffLimit'],
        'completionMode': !runtime_1.exists(json, 'completionMode') ? undefined : json['completionMode'],
        'completions': !runtime_1.exists(json, 'completions') ? undefined : json['completions'],
        'manualSelector': !runtime_1.exists(json, 'manualSelector') ? undefined : json['manualSelector'],
        'parallelism': !runtime_1.exists(json, 'parallelism') ? undefined : json['parallelism'],
        'selector': !runtime_1.exists(json, 'selector') ? undefined : _1.V1LabelSelectorFromJSON(json['selector']),
        'suspend': !runtime_1.exists(json, 'suspend') ? undefined : json['suspend'],
        'template': _1.V1PodTemplateSpecFromJSON(json['template']),
        'ttlSecondsAfterFinished': !runtime_1.exists(json, 'ttlSecondsAfterFinished') ? undefined : json['ttlSecondsAfterFinished'],
    };
}
exports.V1JobSpecFromJSONTyped = V1JobSpecFromJSONTyped;
function V1JobSpecToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'activeDeadlineSeconds': value.activeDeadlineSeconds,
        'backoffLimit': value.backoffLimit,
        'completionMode': value.completionMode,
        'completions': value.completions,
        'manualSelector': value.manualSelector,
        'parallelism': value.parallelism,
        'selector': _1.V1LabelSelectorToJSON(value.selector),
        'suspend': value.suspend,
        'template': _1.V1PodTemplateSpecToJSON(value.template),
        'ttlSecondsAfterFinished': value.ttlSecondsAfterFinished,
    };
}
exports.V1JobSpecToJSON = V1JobSpecToJSON;
