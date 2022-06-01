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
exports.V1ISCSIPersistentVolumeSourceToJSON = exports.V1ISCSIPersistentVolumeSourceFromJSONTyped = exports.V1ISCSIPersistentVolumeSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1ISCSIPersistentVolumeSourceFromJSON(json) {
    return V1ISCSIPersistentVolumeSourceFromJSONTyped(json, false);
}
exports.V1ISCSIPersistentVolumeSourceFromJSON = V1ISCSIPersistentVolumeSourceFromJSON;
function V1ISCSIPersistentVolumeSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chapAuthDiscovery': !runtime_1.exists(json, 'chapAuthDiscovery') ? undefined : json['chapAuthDiscovery'],
        'chapAuthSession': !runtime_1.exists(json, 'chapAuthSession') ? undefined : json['chapAuthSession'],
        'fsType': !runtime_1.exists(json, 'fsType') ? undefined : json['fsType'],
        'initiatorName': !runtime_1.exists(json, 'initiatorName') ? undefined : json['initiatorName'],
        'iqn': json['iqn'],
        'iscsiInterface': !runtime_1.exists(json, 'iscsiInterface') ? undefined : json['iscsiInterface'],
        'lun': json['lun'],
        'portals': !runtime_1.exists(json, 'portals') ? undefined : json['portals'],
        'readOnly': !runtime_1.exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretRef': !runtime_1.exists(json, 'secretRef') ? undefined : _1.V1SecretReferenceFromJSON(json['secretRef']),
        'targetPortal': json['targetPortal'],
    };
}
exports.V1ISCSIPersistentVolumeSourceFromJSONTyped = V1ISCSIPersistentVolumeSourceFromJSONTyped;
function V1ISCSIPersistentVolumeSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chapAuthDiscovery': value.chapAuthDiscovery,
        'chapAuthSession': value.chapAuthSession,
        'fsType': value.fsType,
        'initiatorName': value.initiatorName,
        'iqn': value.iqn,
        'iscsiInterface': value.iscsiInterface,
        'lun': value.lun,
        'portals': value.portals,
        'readOnly': value.readOnly,
        'secretRef': _1.V1SecretReferenceToJSON(value.secretRef),
        'targetPortal': value.targetPortal,
    };
}
exports.V1ISCSIPersistentVolumeSourceToJSON = V1ISCSIPersistentVolumeSourceToJSON;