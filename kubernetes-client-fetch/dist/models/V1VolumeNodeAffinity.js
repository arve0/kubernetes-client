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
exports.V1VolumeNodeAffinityToJSON = exports.V1VolumeNodeAffinityFromJSONTyped = exports.V1VolumeNodeAffinityFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1VolumeNodeAffinityFromJSON(json) {
    return V1VolumeNodeAffinityFromJSONTyped(json, false);
}
exports.V1VolumeNodeAffinityFromJSON = V1VolumeNodeAffinityFromJSON;
function V1VolumeNodeAffinityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'required': !runtime_1.exists(json, 'required') ? undefined : _1.V1NodeSelectorFromJSON(json['required']),
    };
}
exports.V1VolumeNodeAffinityFromJSONTyped = V1VolumeNodeAffinityFromJSONTyped;
function V1VolumeNodeAffinityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'required': _1.V1NodeSelectorToJSON(value.required),
    };
}
exports.V1VolumeNodeAffinityToJSON = V1VolumeNodeAffinityToJSON;
