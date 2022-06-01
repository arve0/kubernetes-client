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
exports.V1VolumeMountToJSON = exports.V1VolumeMountFromJSONTyped = exports.V1VolumeMountFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1VolumeMountFromJSON(json) {
    return V1VolumeMountFromJSONTyped(json, false);
}
exports.V1VolumeMountFromJSON = V1VolumeMountFromJSON;
function V1VolumeMountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mountPath': json['mountPath'],
        'mountPropagation': !runtime_1.exists(json, 'mountPropagation') ? undefined : json['mountPropagation'],
        'name': json['name'],
        'readOnly': !runtime_1.exists(json, 'readOnly') ? undefined : json['readOnly'],
        'subPath': !runtime_1.exists(json, 'subPath') ? undefined : json['subPath'],
        'subPathExpr': !runtime_1.exists(json, 'subPathExpr') ? undefined : json['subPathExpr'],
    };
}
exports.V1VolumeMountFromJSONTyped = V1VolumeMountFromJSONTyped;
function V1VolumeMountToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mountPath': value.mountPath,
        'mountPropagation': value.mountPropagation,
        'name': value.name,
        'readOnly': value.readOnly,
        'subPath': value.subPath,
        'subPathExpr': value.subPathExpr,
    };
}
exports.V1VolumeMountToJSON = V1VolumeMountToJSON;
