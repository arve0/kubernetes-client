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
exports.V1StatefulSetSpecToJSON = exports.V1StatefulSetSpecFromJSONTyped = exports.V1StatefulSetSpecFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1StatefulSetSpecFromJSON(json) {
    return V1StatefulSetSpecFromJSONTyped(json, false);
}
exports.V1StatefulSetSpecFromJSON = V1StatefulSetSpecFromJSON;
function V1StatefulSetSpecFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'minReadySeconds': !runtime_1.exists(json, 'minReadySeconds') ? undefined : json['minReadySeconds'],
        'persistentVolumeClaimRetentionPolicy': !runtime_1.exists(json, 'persistentVolumeClaimRetentionPolicy') ? undefined : _1.V1StatefulSetPersistentVolumeClaimRetentionPolicyFromJSON(json['persistentVolumeClaimRetentionPolicy']),
        'podManagementPolicy': !runtime_1.exists(json, 'podManagementPolicy') ? undefined : json['podManagementPolicy'],
        'replicas': !runtime_1.exists(json, 'replicas') ? undefined : json['replicas'],
        'revisionHistoryLimit': !runtime_1.exists(json, 'revisionHistoryLimit') ? undefined : json['revisionHistoryLimit'],
        'selector': _1.V1LabelSelectorFromJSON(json['selector']),
        'serviceName': json['serviceName'],
        'template': _1.V1PodTemplateSpecFromJSON(json['template']),
        'updateStrategy': !runtime_1.exists(json, 'updateStrategy') ? undefined : _1.V1StatefulSetUpdateStrategyFromJSON(json['updateStrategy']),
        'volumeClaimTemplates': !runtime_1.exists(json, 'volumeClaimTemplates') ? undefined : (json['volumeClaimTemplates'].map(_1.V1PersistentVolumeClaimFromJSON)),
    };
}
exports.V1StatefulSetSpecFromJSONTyped = V1StatefulSetSpecFromJSONTyped;
function V1StatefulSetSpecToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'minReadySeconds': value.minReadySeconds,
        'persistentVolumeClaimRetentionPolicy': _1.V1StatefulSetPersistentVolumeClaimRetentionPolicyToJSON(value.persistentVolumeClaimRetentionPolicy),
        'podManagementPolicy': value.podManagementPolicy,
        'replicas': value.replicas,
        'revisionHistoryLimit': value.revisionHistoryLimit,
        'selector': _1.V1LabelSelectorToJSON(value.selector),
        'serviceName': value.serviceName,
        'template': _1.V1PodTemplateSpecToJSON(value.template),
        'updateStrategy': _1.V1StatefulSetUpdateStrategyToJSON(value.updateStrategy),
        'volumeClaimTemplates': value.volumeClaimTemplates === undefined ? undefined : (value.volumeClaimTemplates.map(_1.V1PersistentVolumeClaimToJSON)),
    };
}
exports.V1StatefulSetSpecToJSON = V1StatefulSetSpecToJSON;
