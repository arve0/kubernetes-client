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
exports.V1beta1PodSecurityPolicyListToJSON = exports.V1beta1PodSecurityPolicyListFromJSONTyped = exports.V1beta1PodSecurityPolicyListFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1beta1PodSecurityPolicyListFromJSON(json) {
    return V1beta1PodSecurityPolicyListFromJSONTyped(json, false);
}
exports.V1beta1PodSecurityPolicyListFromJSON = V1beta1PodSecurityPolicyListFromJSON;
function V1beta1PodSecurityPolicyListFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !runtime_1.exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': (json['items'].map(_1.V1beta1PodSecurityPolicyFromJSON)),
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : _1.V1ListMetaFromJSON(json['metadata']),
    };
}
exports.V1beta1PodSecurityPolicyListFromJSONTyped = V1beta1PodSecurityPolicyListFromJSONTyped;
function V1beta1PodSecurityPolicyListToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiVersion': value.apiVersion,
        'items': (value.items.map(_1.V1beta1PodSecurityPolicyToJSON)),
        'kind': value.kind,
        'metadata': _1.V1ListMetaToJSON(value.metadata),
    };
}
exports.V1beta1PodSecurityPolicyListToJSON = V1beta1PodSecurityPolicyListToJSON;
