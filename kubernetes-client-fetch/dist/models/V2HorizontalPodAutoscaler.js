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
exports.V2HorizontalPodAutoscalerToJSON = exports.V2HorizontalPodAutoscalerFromJSONTyped = exports.V2HorizontalPodAutoscalerFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V2HorizontalPodAutoscalerFromJSON(json) {
    return V2HorizontalPodAutoscalerFromJSONTyped(json, false);
}
exports.V2HorizontalPodAutoscalerFromJSON = V2HorizontalPodAutoscalerFromJSON;
function V2HorizontalPodAutoscalerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !runtime_1.exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : _1.V1ObjectMetaFromJSON(json['metadata']),
        'spec': !runtime_1.exists(json, 'spec') ? undefined : _1.V2HorizontalPodAutoscalerSpecFromJSON(json['spec']),
        'status': !runtime_1.exists(json, 'status') ? undefined : _1.V2HorizontalPodAutoscalerStatusFromJSON(json['status']),
    };
}
exports.V2HorizontalPodAutoscalerFromJSONTyped = V2HorizontalPodAutoscalerFromJSONTyped;
function V2HorizontalPodAutoscalerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': _1.V1ObjectMetaToJSON(value.metadata),
        'spec': _1.V2HorizontalPodAutoscalerSpecToJSON(value.spec),
        'status': _1.V2HorizontalPodAutoscalerStatusToJSON(value.status),
    };
}
exports.V2HorizontalPodAutoscalerToJSON = V2HorizontalPodAutoscalerToJSON;
