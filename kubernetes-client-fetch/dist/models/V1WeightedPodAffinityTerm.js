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
exports.V1WeightedPodAffinityTermToJSON = exports.V1WeightedPodAffinityTermFromJSONTyped = exports.V1WeightedPodAffinityTermFromJSON = void 0;
const _1 = require("./");
function V1WeightedPodAffinityTermFromJSON(json) {
    return V1WeightedPodAffinityTermFromJSONTyped(json, false);
}
exports.V1WeightedPodAffinityTermFromJSON = V1WeightedPodAffinityTermFromJSON;
function V1WeightedPodAffinityTermFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'podAffinityTerm': _1.V1PodAffinityTermFromJSON(json['podAffinityTerm']),
        'weight': json['weight'],
    };
}
exports.V1WeightedPodAffinityTermFromJSONTyped = V1WeightedPodAffinityTermFromJSONTyped;
function V1WeightedPodAffinityTermToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'podAffinityTerm': _1.V1PodAffinityTermToJSON(value.podAffinityTerm),
        'weight': value.weight,
    };
}
exports.V1WeightedPodAffinityTermToJSON = V1WeightedPodAffinityTermToJSON;
