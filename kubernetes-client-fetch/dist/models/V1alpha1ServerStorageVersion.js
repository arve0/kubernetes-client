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
exports.V1alpha1ServerStorageVersionToJSON = exports.V1alpha1ServerStorageVersionFromJSONTyped = exports.V1alpha1ServerStorageVersionFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1alpha1ServerStorageVersionFromJSON(json) {
    return V1alpha1ServerStorageVersionFromJSONTyped(json, false);
}
exports.V1alpha1ServerStorageVersionFromJSON = V1alpha1ServerStorageVersionFromJSON;
function V1alpha1ServerStorageVersionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiServerID': !runtime_1.exists(json, 'apiServerID') ? undefined : json['apiServerID'],
        'decodableVersions': !runtime_1.exists(json, 'decodableVersions') ? undefined : json['decodableVersions'],
        'encodingVersion': !runtime_1.exists(json, 'encodingVersion') ? undefined : json['encodingVersion'],
    };
}
exports.V1alpha1ServerStorageVersionFromJSONTyped = V1alpha1ServerStorageVersionFromJSONTyped;
function V1alpha1ServerStorageVersionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiServerID': value.apiServerID,
        'decodableVersions': value.decodableVersions,
        'encodingVersion': value.encodingVersion,
    };
}
exports.V1alpha1ServerStorageVersionToJSON = V1alpha1ServerStorageVersionToJSON;