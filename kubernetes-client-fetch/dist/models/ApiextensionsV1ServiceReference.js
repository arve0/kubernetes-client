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
exports.ApiextensionsV1ServiceReferenceToJSON = exports.ApiextensionsV1ServiceReferenceFromJSONTyped = exports.ApiextensionsV1ServiceReferenceFromJSON = void 0;
const runtime_1 = require("../runtime");
function ApiextensionsV1ServiceReferenceFromJSON(json) {
    return ApiextensionsV1ServiceReferenceFromJSONTyped(json, false);
}
exports.ApiextensionsV1ServiceReferenceFromJSON = ApiextensionsV1ServiceReferenceFromJSON;
function ApiextensionsV1ServiceReferenceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'namespace': json['namespace'],
        'path': !runtime_1.exists(json, 'path') ? undefined : json['path'],
        'port': !runtime_1.exists(json, 'port') ? undefined : json['port'],
    };
}
exports.ApiextensionsV1ServiceReferenceFromJSONTyped = ApiextensionsV1ServiceReferenceFromJSONTyped;
function ApiextensionsV1ServiceReferenceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'namespace': value.namespace,
        'path': value.path,
        'port': value.port,
    };
}
exports.ApiextensionsV1ServiceReferenceToJSON = ApiextensionsV1ServiceReferenceToJSON;