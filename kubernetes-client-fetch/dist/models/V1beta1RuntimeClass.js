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
exports.V1beta1RuntimeClassToJSON = exports.V1beta1RuntimeClassFromJSONTyped = exports.V1beta1RuntimeClassFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1beta1RuntimeClassFromJSON(json) {
    return V1beta1RuntimeClassFromJSONTyped(json, false);
}
exports.V1beta1RuntimeClassFromJSON = V1beta1RuntimeClassFromJSON;
function V1beta1RuntimeClassFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !runtime_1.exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'handler': json['handler'],
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : _1.V1ObjectMetaFromJSON(json['metadata']),
        'overhead': !runtime_1.exists(json, 'overhead') ? undefined : _1.V1beta1OverheadFromJSON(json['overhead']),
        'scheduling': !runtime_1.exists(json, 'scheduling') ? undefined : _1.V1beta1SchedulingFromJSON(json['scheduling']),
    };
}
exports.V1beta1RuntimeClassFromJSONTyped = V1beta1RuntimeClassFromJSONTyped;
function V1beta1RuntimeClassToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiVersion': value.apiVersion,
        'handler': value.handler,
        'kind': value.kind,
        'metadata': _1.V1ObjectMetaToJSON(value.metadata),
        'overhead': _1.V1beta1OverheadToJSON(value.overhead),
        'scheduling': _1.V1beta1SchedulingToJSON(value.scheduling),
    };
}
exports.V1beta1RuntimeClassToJSON = V1beta1RuntimeClassToJSON;
