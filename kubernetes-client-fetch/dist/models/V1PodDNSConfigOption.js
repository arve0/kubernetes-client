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
exports.V1PodDNSConfigOptionToJSON = exports.V1PodDNSConfigOptionFromJSONTyped = exports.V1PodDNSConfigOptionFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1PodDNSConfigOptionFromJSON(json) {
    return V1PodDNSConfigOptionFromJSONTyped(json, false);
}
exports.V1PodDNSConfigOptionFromJSON = V1PodDNSConfigOptionFromJSON;
function V1PodDNSConfigOptionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !runtime_1.exists(json, 'name') ? undefined : json['name'],
        'value': !runtime_1.exists(json, 'value') ? undefined : json['value'],
    };
}
exports.V1PodDNSConfigOptionFromJSONTyped = V1PodDNSConfigOptionFromJSONTyped;
function V1PodDNSConfigOptionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'value': value.value,
    };
}
exports.V1PodDNSConfigOptionToJSON = V1PodDNSConfigOptionToJSON;
