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
exports.V1ConfigMapNodeConfigSourceToJSON = exports.V1ConfigMapNodeConfigSourceFromJSONTyped = exports.V1ConfigMapNodeConfigSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1ConfigMapNodeConfigSourceFromJSON(json) {
    return V1ConfigMapNodeConfigSourceFromJSONTyped(json, false);
}
exports.V1ConfigMapNodeConfigSourceFromJSON = V1ConfigMapNodeConfigSourceFromJSON;
function V1ConfigMapNodeConfigSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'kubeletConfigKey': json['kubeletConfigKey'],
        'name': json['name'],
        'namespace': json['namespace'],
        'resourceVersion': !runtime_1.exists(json, 'resourceVersion') ? undefined : json['resourceVersion'],
        'uid': !runtime_1.exists(json, 'uid') ? undefined : json['uid'],
    };
}
exports.V1ConfigMapNodeConfigSourceFromJSONTyped = V1ConfigMapNodeConfigSourceFromJSONTyped;
function V1ConfigMapNodeConfigSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'kubeletConfigKey': value.kubeletConfigKey,
        'name': value.name,
        'namespace': value.namespace,
        'resourceVersion': value.resourceVersion,
        'uid': value.uid,
    };
}
exports.V1ConfigMapNodeConfigSourceToJSON = V1ConfigMapNodeConfigSourceToJSON;