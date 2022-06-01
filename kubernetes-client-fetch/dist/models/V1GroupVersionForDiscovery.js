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
exports.V1GroupVersionForDiscoveryToJSON = exports.V1GroupVersionForDiscoveryFromJSONTyped = exports.V1GroupVersionForDiscoveryFromJSON = void 0;
function V1GroupVersionForDiscoveryFromJSON(json) {
    return V1GroupVersionForDiscoveryFromJSONTyped(json, false);
}
exports.V1GroupVersionForDiscoveryFromJSON = V1GroupVersionForDiscoveryFromJSON;
function V1GroupVersionForDiscoveryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'groupVersion': json['groupVersion'],
        'version': json['version'],
    };
}
exports.V1GroupVersionForDiscoveryFromJSONTyped = V1GroupVersionForDiscoveryFromJSONTyped;
function V1GroupVersionForDiscoveryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'groupVersion': value.groupVersion,
        'version': value.version,
    };
}
exports.V1GroupVersionForDiscoveryToJSON = V1GroupVersionForDiscoveryToJSON;
