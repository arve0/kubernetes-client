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
exports.V1HTTPIngressPathToJSON = exports.V1HTTPIngressPathFromJSONTyped = exports.V1HTTPIngressPathFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1HTTPIngressPathFromJSON(json) {
    return V1HTTPIngressPathFromJSONTyped(json, false);
}
exports.V1HTTPIngressPathFromJSON = V1HTTPIngressPathFromJSON;
function V1HTTPIngressPathFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'backend': _1.V1IngressBackendFromJSON(json['backend']),
        'path': !runtime_1.exists(json, 'path') ? undefined : json['path'],
        'pathType': json['pathType'],
    };
}
exports.V1HTTPIngressPathFromJSONTyped = V1HTTPIngressPathFromJSONTyped;
function V1HTTPIngressPathToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'backend': _1.V1IngressBackendToJSON(value.backend),
        'path': value.path,
        'pathType': value.pathType,
    };
}
exports.V1HTTPIngressPathToJSON = V1HTTPIngressPathToJSON;