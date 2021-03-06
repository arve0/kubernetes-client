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
exports.V1CustomResourceSubresourcesToJSON = exports.V1CustomResourceSubresourcesFromJSONTyped = exports.V1CustomResourceSubresourcesFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1CustomResourceSubresourcesFromJSON(json) {
    return V1CustomResourceSubresourcesFromJSONTyped(json, false);
}
exports.V1CustomResourceSubresourcesFromJSON = V1CustomResourceSubresourcesFromJSON;
function V1CustomResourceSubresourcesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'scale': !runtime_1.exists(json, 'scale') ? undefined : _1.V1CustomResourceSubresourceScaleFromJSON(json['scale']),
        'status': !runtime_1.exists(json, 'status') ? undefined : json['status'],
    };
}
exports.V1CustomResourceSubresourcesFromJSONTyped = V1CustomResourceSubresourcesFromJSONTyped;
function V1CustomResourceSubresourcesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'scale': _1.V1CustomResourceSubresourceScaleToJSON(value.scale),
        'status': value.status,
    };
}
exports.V1CustomResourceSubresourcesToJSON = V1CustomResourceSubresourcesToJSON;
