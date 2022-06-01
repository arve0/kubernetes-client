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
exports.V1APIGroupToJSON = exports.V1APIGroupFromJSONTyped = exports.V1APIGroupFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1APIGroupFromJSON(json) {
    return V1APIGroupFromJSONTyped(json, false);
}
exports.V1APIGroupFromJSON = V1APIGroupFromJSON;
function V1APIGroupFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !runtime_1.exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'name': json['name'],
        'preferredVersion': !runtime_1.exists(json, 'preferredVersion') ? undefined : _1.V1GroupVersionForDiscoveryFromJSON(json['preferredVersion']),
        'serverAddressByClientCIDRs': !runtime_1.exists(json, 'serverAddressByClientCIDRs') ? undefined : (json['serverAddressByClientCIDRs'].map(_1.V1ServerAddressByClientCIDRFromJSON)),
        'versions': (json['versions'].map(_1.V1GroupVersionForDiscoveryFromJSON)),
    };
}
exports.V1APIGroupFromJSONTyped = V1APIGroupFromJSONTyped;
function V1APIGroupToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'name': value.name,
        'preferredVersion': _1.V1GroupVersionForDiscoveryToJSON(value.preferredVersion),
        'serverAddressByClientCIDRs': value.serverAddressByClientCIDRs === undefined ? undefined : (value.serverAddressByClientCIDRs.map(_1.V1ServerAddressByClientCIDRToJSON)),
        'versions': (value.versions.map(_1.V1GroupVersionForDiscoveryToJSON)),
    };
}
exports.V1APIGroupToJSON = V1APIGroupToJSON;
