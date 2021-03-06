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
exports.V1OwnerReferenceToJSON = exports.V1OwnerReferenceFromJSONTyped = exports.V1OwnerReferenceFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1OwnerReferenceFromJSON(json) {
    return V1OwnerReferenceFromJSONTyped(json, false);
}
exports.V1OwnerReferenceFromJSON = V1OwnerReferenceFromJSON;
function V1OwnerReferenceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': json['apiVersion'],
        'blockOwnerDeletion': !runtime_1.exists(json, 'blockOwnerDeletion') ? undefined : json['blockOwnerDeletion'],
        'controller': !runtime_1.exists(json, 'controller') ? undefined : json['controller'],
        'kind': json['kind'],
        'name': json['name'],
        'uid': json['uid'],
    };
}
exports.V1OwnerReferenceFromJSONTyped = V1OwnerReferenceFromJSONTyped;
function V1OwnerReferenceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiVersion': value.apiVersion,
        'blockOwnerDeletion': value.blockOwnerDeletion,
        'controller': value.controller,
        'kind': value.kind,
        'name': value.name,
        'uid': value.uid,
    };
}
exports.V1OwnerReferenceToJSON = V1OwnerReferenceToJSON;
