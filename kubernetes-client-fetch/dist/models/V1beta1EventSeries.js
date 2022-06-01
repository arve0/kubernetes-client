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
exports.V1beta1EventSeriesToJSON = exports.V1beta1EventSeriesFromJSONTyped = exports.V1beta1EventSeriesFromJSON = void 0;
function V1beta1EventSeriesFromJSON(json) {
    return V1beta1EventSeriesFromJSONTyped(json, false);
}
exports.V1beta1EventSeriesFromJSON = V1beta1EventSeriesFromJSON;
function V1beta1EventSeriesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': json['count'],
        'lastObservedTime': (new Date(json['lastObservedTime'])),
    };
}
exports.V1beta1EventSeriesFromJSONTyped = V1beta1EventSeriesFromJSONTyped;
function V1beta1EventSeriesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'lastObservedTime': (value.lastObservedTime.toISOString()),
    };
}
exports.V1beta1EventSeriesToJSON = V1beta1EventSeriesToJSON;